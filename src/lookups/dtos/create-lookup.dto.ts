import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateLookuoDto {
  @ApiProperty({ example: 'label name' })
  @IsString()
  labelName: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  userId: number;
}
