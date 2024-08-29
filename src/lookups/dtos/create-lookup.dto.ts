import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLookuoDto {
  @ApiProperty({ example: 'label name' })
  @IsString()
  labelName: string;
}
