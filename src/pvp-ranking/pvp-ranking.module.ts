import { Module } from '@nestjs/common';
import { PvpRankingController } from './pvp-ranking.controller';
import { PvpRankingService } from './service/pvp-ranking/pvp-ranking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PvpRanking } from './entities/pvp-ranking.entity';

@Module({
  controllers: [PvpRankingController],
  imports:[
    TypeOrmModule.forFeature([PvpRanking])
  ],
  providers: [PvpRankingService],
  exports: [TypeOrmModule]
})
export class PvpRankingModule {}
