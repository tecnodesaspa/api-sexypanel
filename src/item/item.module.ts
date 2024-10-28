import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ItemController } from './item.controller';
import { ItemService } from './services/item/item.service';

@Module({
  controllers: [ItemController],
  imports:[
    TypeOrmModule.forFeature([Item]),
  ],
  providers: [ItemService],
  exports: [TypeOrmModule],
})
export class ItemModule {}
