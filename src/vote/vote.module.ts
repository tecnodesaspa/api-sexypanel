import { Module } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { VoteService } from './services/vote/vote.service';
import { Vote } from './entities/vote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [VoteController],
  imports:[
    TypeOrmModule.forFeature([Vote]),
  ],
  providers: [VoteService]
})
export class VoteModule {}
