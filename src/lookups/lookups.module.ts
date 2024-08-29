import { Module } from '@nestjs/common';
import { LookupsController } from './lookups.controller';
import { LookupsService } from './services/lookups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lookup } from './entities/lookup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lookup])],
  controllers: [LookupsController],
  providers: [LookupsService],
})
export class LookupsModule {}
