import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class QueryGetCharsDto {
  @ApiProperty({ example: 10 })
  @IsNumber()
  @IsNotEmpty()
  readonly limit: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly page: number;

  @ApiProperty({ example: 'test@yopmail.com' })
  @IsString()
  @IsOptional()
  readonly email: string;

  @ApiProperty({ example: '' })
  @IsString()
  @IsOptional()
  readonly name: string;

  @ApiProperty({ example: '127.0.0.1' })
  @IsString()
  @IsOptional()
  readonly ip: string;
}
