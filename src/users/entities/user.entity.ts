import { Lookup } from 'src/lookups/entities/lookup.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @OneToMany(() => Lookup, (lookup) => lookup.user)
  lookups: Lookup[];
}
