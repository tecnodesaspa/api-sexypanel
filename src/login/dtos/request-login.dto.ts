import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator'

export class RequestLogionDto {
    @ApiProperty({ example: 'test'})
    @IsNotEmpty()
    @IsString()
    readonly userid: string;

    @ApiProperty({ example: '123123123'})
    @IsNotEmpty()
    @IsString()
    readonly user_pass: string;
    
    @ApiProperty({ example: 'F'})
    @IsNotEmpty()
    @IsString()
    readonly sex: string;
    
    @ApiProperty({ example: 'test@yopmail.com'})
    @IsNotEmpty()
    @IsString()
    readonly email: string;
    
    @ApiProperty({ example: '127.0.0.1'})
    @IsNotEmpty()
    @IsString()
    readonly last_ip: string;
}