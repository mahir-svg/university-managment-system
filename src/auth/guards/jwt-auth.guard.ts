<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
=======
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard(
  'jwt',
) {}
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
