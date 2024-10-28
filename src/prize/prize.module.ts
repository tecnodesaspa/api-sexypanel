import { Module } from '@nestjs/common';
import { PrizeController } from './prize.controller';
import { PrizeService } from './services/prize/prize.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeConnection } from './entities/prize-connection.entity';

@Module({
  controllers: [PrizeController],
  imports: [
    TypeOrmModule.forFeature([PrizeConnection])
  ],
  providers: [PrizeService],
  exports: [TypeOrmModule]
})
export class PrizeModule {}
