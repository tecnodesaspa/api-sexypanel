import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { RequestSavePrizePvpDto } from './dtos/request-save-prize-pvp.dto';
import { PrizePvpService } from './services/prize-pvp/prize-pvp.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('api/prize-pvp')
export class PrizePvpController {

    constructor(
        private prizePvpService: PrizePvpService
    ){}

    @Get('get-prizes-pvp')
    @ApiOperation({ summary: 'Busqueda de premios de PVP del juego' })
    @ApiResponse({ status: 200, description: 'Ranking devuelto con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async getPrizzesPvp(@Res() res: Response){
        try {
            const response = await this.prizePvpService.getPrizesPvp()
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }

    @Post('save-prize-pvp')
    @ApiOperation({ summary: 'Guardar premios de PVP del juego' })
    @ApiBody({ type: RequestSavePrizePvpDto, description: 'Datos de premios de PVP' })
    @ApiResponse({ status: 200, description: 'Guardado de premio con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async savePrizePvp(@Body() body: RequestSavePrizePvpDto, @Res() res: Response) {
        try {
            const response = await this.prizePvpService.savePrizePvp(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }

    @Delete('delete-prize-pvp/:id')
    @ApiOperation({ summary: 'Eliminar premio de PVP del juego según id' })
    @ApiParam({name: 'id', description: 'id de premio', type: 'number'})
    @ApiResponse({ status: 200, description: 'Premio eliminado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async deletePrizePvp(@Param() params, @Res() res: Response){
        try {
            const { id } = params
            const response = await this.prizePvpService.deletePrizePvp(id)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
