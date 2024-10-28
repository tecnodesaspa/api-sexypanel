import { Body, Controller, Post, Put, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RequestUpdateLockUserDto } from './dtos/request-update-lock-user.dto';
import { LocksService } from './services/locks/locks.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/lock')
export class LocksController {
  constructor(private lockService: LocksService) {}

  @Put('update-lock-user')
  @ApiOperation({ summary: 'Actualizar bloqueo de cuenta de usuario' })
  @ApiBody({ type: RequestUpdateLockUserDto, description: 'Datos a actualizar' })
  @ApiResponse({ status: 200, description: 'Actualización de cuenta con éxito.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
  async updateBanUser(
    @Body() body: RequestUpdateLockUserDto,
    @Res() res: Response,
  ) {
    try {
      const response = await this.lockService.saveOrUpdateLockService(body);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      console.log('ERROR:', error);
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }
}
