import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';

import { User } from './users/entities/user.entity';
import { Course } from './courses/entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: 'localhost',

      port: 5432,

      username: 'postgres',

      password: '1318918',

      database: 'university_db',

      entities: [User, Course],

      synchronize: true,
    }),

    AuthModule,
    UsersModule,
    CoursesModule,
  ],
})
export class AppModule {}