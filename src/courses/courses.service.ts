import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,
  ) {}

  create(data: Partial<Course>) {
    const course = this.courseRepo.create(data);

    return this.courseRepo.save(course);
  }

  findAll() {
    return this.courseRepo.find();
  }
}