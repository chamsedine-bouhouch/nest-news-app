import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lookup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'label_name' })
  labelName: string;
}
