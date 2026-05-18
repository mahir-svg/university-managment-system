import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentEmail: string;

  @Column()
  courseCode: string;

  @Column()
  courseTitle: string;
}