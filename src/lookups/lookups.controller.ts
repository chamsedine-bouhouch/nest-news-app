import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LookupsService } from './services/lookups.service';
import { CreateLookuoDto } from './dtos/create-lookup.dto';

@Controller('lookups')
export class LookupsController {
  constructor(private readonly lookupService: LookupsService) {}
  @Get()
  async findAll() {
    return this.lookupService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.lookupService.findOne(id);
  }

  @Post()
  async create(@Body() createLookupDto: CreateLookuoDto) {
    this.lookupService.create(createLookupDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLookupDto: CreateLookuoDto,
  ) {
    return this.lookupService.update(id, updateLookupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.lookupService.delete(id);
  }
}
