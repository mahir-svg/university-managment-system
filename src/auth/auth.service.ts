import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';

<<<<<<< HEAD
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';

import { RegisterDto } from './dto/register.dto';

=======
import { UsersService } from '../users/users.service';

import { RegisterDto } from './dto/register.dto';
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

import { Role } from '../common/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
<<<<<<< HEAD
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
=======
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const existingUser =
      await this.usersService.findByEmail(email);
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483

    if (existingUser) {
      throw new BadRequestException(
        'Email already exists',
      );
    }

<<<<<<< HEAD
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
=======
    let role: Role;

    if (email.endsWith('@admin.edu')) {
      role = Role.ADMIN;
    } else if (email.endsWith('@student.edu')) {
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
      role = Role.STUDENT;
    } else {
      throw new BadRequestException(
        'Invalid university email',
      );
    }

<<<<<<< HEAD
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
=======
    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return {
      message: 'Registration successful',
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
      user,
    };
  }

<<<<<<< HEAD
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
=======
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user =
      await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const isMatch =
      await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token =
      this.jwtService.sign(payload);

    return {
      access_token: token,
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
    };
  }
}