import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { QueryGetMyLastConnectionDto } from './dtos/query-get-my-last-connection.dto';
import { ConnectionUserService } from './services/connection-user/connection-user.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('api/connection-user')
export class ConnectionUserController {

    constructor(
        private connectionUserService: ConnectionUserService
    ){}

    @Get('get-my-last-connection')
    @ApiOperation({ summary: 'Busqueda de mi última conexión en el juego' })
    @ApiQuery({ name: 'email', description: 'Email de usuario', required: true, type: 'string' })
    @ApiResponse({ status: 200, description: 'Última conexión devuelta con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async getMyPrize(@Query() query: QueryGetMyLastConnectionDto, @Res() res: Response){
        try {
            const { email } = query
            const response = await this.connectionUserService.getMyLastConnection(email)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }
}
