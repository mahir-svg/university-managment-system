import { Module } from '@nestjs/common';
<<<<<<< HEAD

import { AuthService } from './auth.service';

import { AuthController } from './auth.controller';

import { JwtModule } from '@nestjs/jwt';

import { PassportModule } from '@nestjs/passport';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    PassportModule,

    JwtModule.register({
      secret: 'SECRET_KEY',

      signOptions: {
        expiresIn: '1d',
      },
    }),

    TypeOrmModule.forFeature([
      User,
    ]),
  ],

  controllers: [AuthController],

  providers: [AuthService],

  exports: [AuthService],
})
export class AuthModule {}
=======
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
     UsersModule,

    PassportModule,
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '1d' },
    }),
  ],

providers: [
    AuthService,
    JwtStrategy,
  ],

  controllers: [AuthController],
})
export class AuthModule {}
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
