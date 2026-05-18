import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';

import { Course } from './entities/course.entity';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],

  providers: [CoursesService],

  controllers: [CoursesController],
})
export class CoursesModule {}
=======
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
