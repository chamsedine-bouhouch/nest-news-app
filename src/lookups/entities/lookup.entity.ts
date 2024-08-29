import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lookup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'label_name' })
  labelName: string;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  // @Column({ name: 'user_id', type: 'int', nullable: true })
  // userId: number;
}
