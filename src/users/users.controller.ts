import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users-controller')
@Controller('users')
export class UsersController {
  constructor(private usersServie: UsersService) {}
  @Get()
  async getUsers() {
    return this.usersServie.findUsers();
  }
}
