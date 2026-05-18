import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { User } from './users/entities/user.entity';
import { Course } from './courses/entities/course.entity';
import { Grade } from './grades/entities/grade.entity';
import { GradesModule } from './grades/grades.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { Enrollment } from './enrollments/entities/enrollment.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    {  type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1318918',
      database: 'university_db',

      entities: [User, Course, Grade, Enrollment],

      synchronize: true,
    }
  ), AuthModule, UsersModule, CoursesModule, GradesModule, EnrollmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
