import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private datasource: DataSource) {}

  async findUsers() {
    // return this.datasource.getRepository('User').find();
    return (
      this.datasource
        .getRepository('User')
        .createQueryBuilder('User')
        //   .where('User.fullName =:name', { name: 'Ch ams' })

        .leftJoinAndSelect('User.lookups', 'lookups')
        .getMany()
    );
  }

  async createBulk() {
    const result = await this.datasource.getRepository(User).insert([
      {
        fullName: 'Ahmed',
      },
      {
        fullName: 'Safa',
      },
      {
        fullName: 'Marwa',
      },
    ]);

    console.log(result);
  }
}
