import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class RequestSavePrizeConnectionDto {
    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    readonly day: number;
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ example: 130004 })
    readonly itemId: number;

    @ApiProperty({ example: 2 })
    @IsNotEmpty()
    @IsNumber()
    readonly quantity: number;
}