import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';

import { RegisterDto } from './dto/register.dto';

import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

import { Role } from '../common/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository:
      Repository<User>,

    private jwtService:
      JwtService,
  ) {}

  // Register
  async register(
    registerDto: RegisterDto,
  ) {
    const {
      name,
      email,
      password,
    } = registerDto;

    // Check Existing User
    const existingUser =
      await this.usersRepository.findOne(
        {
          where: { email },
        },
      );

    if (existingUser) {
      throw new BadRequestException(
        'Email already exists',
      );
    }

    // Role Detection
    let role: Role;

    if (
      email.endsWith(
        '@admin.edu',
      )
    ) {
      role = Role.ADMIN;
    } else if (
      email.endsWith(
        '@student.edu',
      )
    ) {
      role = Role.STUDENT;
    } else {
      throw new BadRequestException(
        'Invalid university email',
      );
    }

    // Hash Password
    const hashedPassword =
      await bcrypt.hash(
        password,
        10,
      );

    // Create User
    const user =
      this.usersRepository.create({
        name,
        email,
        password:
          hashedPassword,
        role,
      });

    // Save User
    await this.usersRepository.save(
      user,
    );

    return {
      message:
        'Registration Successful',
      user,
    };
  }

  // Login
  async login(
    loginDto: LoginDto,
  ) {
    const {
      email,
      password,
    } = loginDto;

    // Check University Email
    if (
      !email.endsWith(
        '@student.edu',
      ) &&
      !email.endsWith(
        '@admin.edu',
      )
    ) {
      throw new UnauthorizedException(
        'Invalid University Email',
      );
    }

    // Find User
    const user =
      await this.usersRepository.findOne(
        {
          where: { email },
        },
      );

    if (!user) {
      throw new UnauthorizedException(
        'User Not Found',
      );
    }

    // Check Password
    const isMatch =
      await bcrypt.compare(
        password,
        user.password,
      );

    if (!isMatch) {
      throw new UnauthorizedException(
        'Wrong Password',
      );
    }

    // JWT Payload
    const payload = {
      sub: user.id,

      email: user.email,

      role: user.role,
    };

    return {
      access_token:
        this.jwtService.sign(
          payload,
        ),

      role: user.role,

      email: user.email,
    };
  }
}