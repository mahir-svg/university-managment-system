import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
<<<<<<< HEAD
  courseCode: string;

  @Column()
  courseTitle: string;
=======
  courseName: string;

  @Column()
  courseCode: string;

  @Column()
  teacherName: string;
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
}