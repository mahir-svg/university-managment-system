import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { RolesGuard } from '../auth/guards/roles.guard';

import { Roles } from '../auth/decorators/roles.decorator';

@Controller('courses')
export class CoursesController {
  @Get()

  @UseGuards(
    JwtAuthGuard,
    RolesGuard,
  )

  @Roles('admin')

  getCourses() {
    return 'Only admin can access courses';
  }
}