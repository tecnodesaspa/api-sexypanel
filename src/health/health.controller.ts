import {
  Controller,
  Get,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { HealthService } from './services/health/health.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('status')
  @ApiOperation({ summary: 'Estado de servicio' })
  @ApiResponse({ status: 200, description: 'Estado Ok.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada no válidos.' })
  async getServerStatus(@Res() res: Response) {
    try {
      const response = await this.healthService.getStatus();
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }
}
