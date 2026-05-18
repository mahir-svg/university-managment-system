import {
  Controller,
<<<<<<< HEAD
  Post,
  Body,
  Get,
} from '@nestjs/common';

import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
  ) {}

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
=======
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
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
  }
}