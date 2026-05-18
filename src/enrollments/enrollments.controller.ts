import {
  Controller,
  Post,
  Body,
  Get,
} from '@nestjs/common';

import { EnrollmentsService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(
    private readonly enrollmentsService: EnrollmentsService,
  ) {}

  @Post()
  create(@Body() body) {
    return this.enrollmentsService.create(body);
  }

  @Get()
  findAll() {
    return this.enrollmentsService.findAll();
  }
}