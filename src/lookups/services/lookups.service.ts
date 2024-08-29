import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lookup } from '../entities/lookup.entity';
import { Repository } from 'typeorm';
import { CreateLookuoDto } from '../dtos/create-lookup.dto';

@Injectable()
export class LookupsService {
  constructor(
    @InjectRepository(Lookup)
    private lookupRepository: Repository<Lookup>,
  ) {}
  /** find all */
  async findAll() {
    return this.lookupRepository.find();
  }

  async findOne(id: number) {
    return this.lookupRepository.findOneBy({ id });
  }

  async create(createLookupdto: CreateLookuoDto) {
    const lookup = this.lookupRepository.create(createLookupdto);

    console.log('lookup', lookup);
    this.lookupRepository.insert(lookup);
  }

  async update(id: number, updateLookupDto: CreateLookuoDto): Promise<string> {
    const lookup = await this.findOne(id);
    if (!lookup) {
      throw new NotFoundException(`Lookup with id ${id} was not found`);
    }

    this.lookupRepository.update(id, updateLookupDto);

    return `Lookup with id ${id} was updated succefully`;
  }
  async delete(id: number): Promise<string> {
    const lookup = await this.findOne(id);
    if (!lookup) {
      throw new NotFoundException(`Lookup with id ${id} was not found`);
    }
    this.lookupRepository.delete(id);

    return `Lookup with id ${id} was deleted succefully`;
  }
}
