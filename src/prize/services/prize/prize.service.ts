import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestSavePrizeConnectionDto } from '../../../prize/dtos/request-save-prize-connection.dto';
import { PrizeConnection } from '../../../prize/entities/prize-connection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrizeService {
  schema: string = process.env.DB_SCHEMA;
    
    constructor(
        @InjectRepository(PrizeConnection)
        private prizeConnectionRepository: Repository<PrizeConnection>,
        
    ){}

    getPrizesConnection(){
        const query = `
            select 
                p.prizeconnection_id,
                p.day,
                p.quantity,
                i.id,
                i.name_english,
                i.name_aegis
            from ${this.schema}.prizeconnection p
            inner join ${this.schema}.item_db i on i.id = p.item_id;
        `
        return this.prizeConnectionRepository.query(query)
    }

    async savePrizeConnection(request: RequestSavePrizeConnectionDto){
        const { day, itemId,  quantity } = request
        const prize = new PrizeConnection()
        prize.day = day
        prize.item_id = itemId
        prize.quantity = quantity
        prize.created_at = new Date()
        return this.prizeConnectionRepository.insert(prize)            
    }

    deletePrizeConnection(id: number){
        return this.prizeConnectionRepository.delete({prizeconnection_id: id})
    }
}
