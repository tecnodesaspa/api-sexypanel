import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizePvp } from './entities/prize-pvp.entity';
import { PrizeUserPvp } from './entities/prize-user-pvp.entity';
import { PvpRanking } from './entities/pvpranking.entity';
import { PrizePvpController } from './prize-pvp.controller';
import { PrizePvpService } from './services/prize-pvp/prize-pvp.service';
import { TaskRankingPvpService } from './services/task-ranking-pvp/task-ranking-pvp.service';

@Module({
  controllers: [PrizePvpController],
  imports: [
    TypeOrmModule.forFeature([PrizePvp, PvpRanking, PrizeUserPvp])
  ],
  providers: [PrizePvpService, TaskRankingPvpService]
})
export class PrizePvpModule {}
