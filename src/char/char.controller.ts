import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CharService } from './services/char/char.service';
import { Response } from 'express';
import { QueryGetCharsDto } from './dtos/query-get-chars.dto';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('api/char')
export class CharController {
  constructor(private charService: CharService) {}


  @Get('get-chars')
  @ApiOperation({ summary: 'Busqueda de personajes del juego' })
  @ApiQuery({ name: 'limit', description: 'Límite', required: true, type: 'number' })
  @ApiQuery({ name: 'page', description: 'Página', required: true, type: 'number' })
  @ApiQuery({ name: 'email', description: 'Email de usuario', required: false, type: 'string' })
  @ApiQuery({ name: 'name', description: 'Nombre de personaje', required: false, type: 'string' })
  @ApiQuery({ name: 'ip', description: 'IPv4', required: false, type: 'string' })
  @ApiResponse({ status: 200, description: 'Última conexión devuelta con éxito.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
  async getAccounts(@Query() query: QueryGetCharsDto, @Res() res: Response) {
    try {
      const response = await this.charService.getChars(query);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

}
