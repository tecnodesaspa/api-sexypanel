import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionUserController } from './connection-user.controller';
import { ConnectionUser } from './entities/connection-user.entity';
import { ConnectionUserService } from './services/connection-user/connection-user.service';

@Module({
  controllers: [ConnectionUserController],
  imports: [
    TypeOrmModule.forFeature([ConnectionUser])
  ],
  providers: [ConnectionUserService],
  exports: [TypeOrmModule]
})
export class ConnectionUserModule {}
