import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class RequestUpdateLockUserDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly account_id: number;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsNotEmpty()
  readonly is_bg_lock: boolean;

  @ApiProperty({ example: new Date() })
  @IsDate()
  @IsOptional()
  readonly start_date_bg_lock: Date;

  @ApiProperty({ example: new Date() })
  @IsDate()
  @IsOptional()
  readonly end_date_bg_lock: Date;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsNotEmpty()
  readonly is_woe_lock: boolean;

  @ApiProperty({ example: new Date() })
  @IsDate()
  @IsOptional()
  readonly start_date_woe_lock: Date;

  @ApiProperty({ example: new Date() })
  @IsDate()
  @IsOptional()
  readonly end_date_woe_lock: Date;

  @ApiProperty({ example: new Date() })
  @IsBoolean()
  @IsNotEmpty()
  readonly is_ban: boolean;

  @ApiProperty({ example: new Date() })
  @IsDate()
  @IsOptional()
  readonly start_date_ban: Date;

  @ApiProperty({ example: new Date() })
  @IsDate()
  @IsOptional()
  readonly end_date_ban: Date;

  @ApiProperty({ example: 'admin@yopmail.com' })
  @IsString()
  @IsNotEmpty()
  readonly admin: string;
}
