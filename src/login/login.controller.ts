import { Body, Controller, Get, HttpStatus, Post, Query, Res, Put } from '@nestjs/common';
import { LoginService } from './services/login/login.service';
import { RequestLogionDto } from './dtos/request-login.dto';
import { Response } from 'express';
import { QueryGetLoginDto } from './dtos/query-get-login.dto';
import { QueryGetLoginsDto } from './dtos/query-get-logins.dto';
import { RequestUpdateLoginDto } from './dtos/request-update-login.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('api/login')
export class LoginController {
    constructor(
        private loginService: LoginService
    ) {}

    @Post('register')
    @ApiOperation({ summary: 'Registrar cuenta en juego' })
    @ApiBody({ type: RequestLogionDto, description: 'Datos de cuenta' })
    @ApiResponse({ status: 200, description: 'Registro de cuenta con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async registerLogin(@Body() body: RequestLogionDto, @Res() res: Response) {
        try {
            const response = await this.loginService.register(body)
            res.status(HttpStatus.OK).send({
                message: 'Usuario registrado con éxito',
                idUser: response.raw.insertId
            })
        } catch (error) {
            console.log('ERROR:', error);
            throw error
        }
    }

    @Get('get-login')
    @ApiOperation({ summary: 'Buscar datos de cuenta de juego' })
    @ApiQuery({ name: 'email', description: 'Email de cuenta', required: true, type: 'string' })
    @ApiQuery({ name: 'user', description: 'Cuenta de usuario', required: true, type: 'string' })
    @ApiResponse({ status: 200, description: 'Datos de cuenta.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async getLogin(@Query() query: QueryGetLoginDto, @Res() res: Response){
        try {
            const response = await this.loginService.getLogin(query)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            console.log('ERROR:', error);
            throw error
        }
    }

    @Get('get-logins')
    @ApiOperation({ summary: 'Buscar datos de cuentas de juego' })
    @ApiQuery({ name: 'email', description: 'Email de cuenta', required: true, type: 'string' })
    @ApiQuery({ name: 'limit', description: 'Límite', required: true, type: 'number' })
    @ApiQuery({ name: 'page', description: 'Página', required: true, type: 'number' })
    @ApiResponse({ status: 200, description: 'Datos de cuenta.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async getLogins(@Query() query: QueryGetLoginsDto, @Res() res: Response){
        try {
            const response = await this.loginService.getLogins(query)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }

    @Put('update-login')
    @ApiOperation({ summary: 'Actualizar contraseña de cuenta en juego' })
    @ApiBody({ type: RequestUpdateLoginDto, description: 'Datos de cuenta' })
    @ApiResponse({ status: 200, description: 'Actualización de cuenta con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
    async updateLogin(@Body() body: RequestUpdateLoginDto, @Res() res: Response) {
        try {
            const response = await this.loginService.updateLogin(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
