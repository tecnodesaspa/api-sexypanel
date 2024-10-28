import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from '../locks/services/tasks/tasks.service';
import { Login } from '../login/entities/login.entity';
import { Lock } from './entities/lock.entity';
import { LocksController } from './locks.controller';
import { LocksService } from './services/locks/locks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lock,Login]),
  ],
  providers: [LocksService, TasksService],
  controllers: [LocksController],
  exports: [TypeOrmModule],
})
export class LocksModule {}
