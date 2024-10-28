import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RequestSavePrizeConnectionDto } from './dtos/request-save-prize-connection.dto';
import { PrizeService } from './services/prize/prize.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('api/prizes')
export class PrizeController {
    constructor(
        private prizeService: PrizeService
    ){}

    @Post('save-prize')
    @ApiOperation({ summary: 'Guardar premios diarios' })
    @ApiBody({ type: RequestSavePrizeConnectionDto, description: 'Datos de premio diario' })
    @ApiResponse({ status: 200, description: 'Guardado de premio diario con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async savePrize(@Body() body: RequestSavePrizeConnectionDto, @Res() res: Response){
        try {
            const response = this.prizeService.savePrizeConnection(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }

    @Delete('delete-prize/:id')
    @ApiOperation({ summary: 'Eliminar premio diario según id' })
    @ApiParam({name: 'id', description: 'id de premio diario', type: 'number'})
    @ApiResponse({ status: 200, description: 'Premio diario eliminado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async deletePrize(@Param() params, @Res() res: Response){
        try {
            const { id } = params
            const response = await this.prizeService.deletePrizeConnection(id)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }

    @Get('get-prizes')
    @ApiOperation({ summary: 'Busqueda de premios diarios' })
    @ApiResponse({ status: 200, description: 'Premios diarios devuelto con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async getPrize(@Res() res: Response){
        try {
            const response = await this.prizeService.getPrizesConnection()
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }
}
