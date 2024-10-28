import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export  class RequestSavePrizePvpDto {
    @ApiProperty({example: 13005})
    @IsNotEmpty()
    @IsNumber()
    readonly item_id: number;
    
    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    readonly quantity: number;
    
    @ApiProperty({example: 1})
    @IsNotEmpty()
    @IsNumber()
    readonly morethan: number;
    
    @ApiProperty({example: 3})
    @IsNotEmpty()
    @IsNumber()
    readonly lessthan: number;
}