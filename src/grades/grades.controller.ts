import {
  Controller,
  Post,
  Body,
  Get,
} from '@nestjs/common';

import { GradesService } from './grades.service';

@Controller('grades')
export class GradesController {
  constructor(
    private readonly gradesService: GradesService,
  ) {}

  @Post()
  create(@Body() body) {
    return this.gradesService.create(body);
  }

  @Get()
  findAll() {
    return this.gradesService.findAll();
  }
}