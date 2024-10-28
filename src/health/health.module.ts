import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from '../login/entities/login.entity';
import { HealthController } from './health.controller';
import { HealthService } from './services/health/health.service';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  controllers: [HealthController],
  providers: [HealthService],
  exports: [TypeOrmModule],
})
export class HealthModule {}
