import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryGetItemsDto } from '../../../item/dtos/query-get-items.dto';
import { Item } from '../../../item/entities/item.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ItemService {

    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>,
    ) {}

    getItems(query: QueryGetItemsDto){
        const { name, page, limit } = query
        const where = {}
        if(name && name != ''){
            where['name_english'] = Like(`%${name}%`)
        }
        return this.itemRepository.find({ select: { id: true, name_english: true} , where, skip: (page * limit - limit), take: limit})
    }
}
