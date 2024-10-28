import { Controller, Get, Query } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { Response } from 'express';
import { QueryGetItemsDto } from './dtos/query-get-items.dto';
import { ItemService } from './services/item/item.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('api/items')
export class ItemController {

    constructor(
        private itemService: ItemService
    ) { }

    @Get('get-items')
    @ApiOperation({ summary: 'Busqueda de items del juego' })
    @ApiQuery({ name: 'name', description: 'Nombre de item', required: false, type: 'string' })
    @ApiQuery({ name: 'limit', description: 'Límite', required: false, type: 'number' })
    @ApiQuery({ name: 'page', description: 'Página', required: false, type: 'number' })
    @ApiResponse({ status: 200, description: 'Items devuelto con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async getItems(@Query() query: QueryGetItemsDto, @Res() res: Response){
        try {
            const items = await this.itemService.getItems(query)
            res.status(HttpStatus.OK).send(items)
        } catch (error) {
            throw error
        }
    }
}
