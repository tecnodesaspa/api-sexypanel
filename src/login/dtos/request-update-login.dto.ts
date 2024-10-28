import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RequestUpdateLoginDto {
    @ApiProperty({ example: '2000009' })
    @IsNotEmpty()
    @IsNumber()
    readonly account_id: number;
    
    @ApiProperty({ example: 'F' })
    @IsNotEmpty()
    @IsString()
    readonly sex: string;

    @ApiProperty({ example: '123123123' })
    @IsNotEmpty()
    @IsString()
    readonly user_pass: string;
}