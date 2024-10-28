import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { PvpRankingService } from './service/pvp-ranking/pvp-ranking.service';
import { Response } from 'express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/pvp-ranking')
export class PvpRankingController {

    constructor(
        private pvpRankingService: PvpRankingService
    ){}

    @Get('get-ranking')
    @ApiOperation({ summary: 'Busqueda de ranking PVP del juego' })
    @ApiResponse({ status: 200, description: 'Ranking devuelto con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async getPvpRanking(@Res() res: Response){
        try {
            const response = await this.pvpRankingService.getPvpRanking()
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
