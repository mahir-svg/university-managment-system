import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Grade } from './entities/grade.entity';

@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade)
    private gradeRepo: Repository<Grade>,
  ) {}

  create(data: Partial<Grade>) {
    const grade =
      this.gradeRepo.create(data);

    return this.gradeRepo.save(grade);
  }

  findAll() {
    return this.gradeRepo.find();
  }
}