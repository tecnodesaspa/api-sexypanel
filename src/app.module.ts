import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from './config/db.config';
import { LocksModule } from './locks/locks.module';
import { LoginModule } from './login/login.module';
import { CharModule } from './char/char.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PrizeModule } from './prize/prize.module';
import { ItemModule } from './item/item.module';
import { ConnectionUserModule } from './connection-user/connection-user.module';
import { VoteModule } from './vote/vote.module';
import { PrizePvpModule } from './prize-pvp/prize-pvp.module';
import { PvpRankingModule } from './pvp-ranking/pvp-ranking.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    LocksModule,
    LoginModule,
    HealthModule,
    CharModule,
    ScheduleModule.forRoot(),
    PrizeModule,
    ItemModule,
    ConnectionUserModule,
    VoteModule,
    PrizePvpModule,
    PvpRankingModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
