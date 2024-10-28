import { IsNumber, IsOptional, IsString } from "class-validator";

export class QueryGetItemsDto {
    @IsString()
    @IsOptional()
    readonly name: string;

    @IsNumber()
    @IsOptional()
    readonly page: number;

    @IsNumber()
    @IsOptional()
    readonly limit: number;
}