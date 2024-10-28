import { Controller, Put, Body, Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { Response } from 'express';
import { VoteDto } from './dtos/vote.dto';
import { VoteService } from './services/vote/vote.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/vote')
export class VoteController {

    constructor(
        private voteService: VoteService
    ) { }

    @Put()
    @ApiOperation({ summary: 'Votar en servidor' })
    @ApiBody({ type: VoteDto, description: 'Datos de voto'})
    @ApiResponse({ status: 200, description: 'Voto registrado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async vote(@Body() body: VoteDto, @Res() res: Response) {
        try {
            const response = await this.voteService.vote(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
