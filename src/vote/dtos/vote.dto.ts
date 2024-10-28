import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class VoteDto {
    @ApiProperty({example: 'email@yopmail.com'})
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty({example: '127.0.0.1'})
    @IsNotEmpty()
    @IsString()
    ip: string;
    
    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    rank: number;
}