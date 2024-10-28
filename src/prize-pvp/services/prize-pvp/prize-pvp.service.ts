import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestSavePrizePvpDto } from '../../../prize-pvp/dtos/request-save-prize-pvp.dto';
import { PrizePvp } from '../../../prize-pvp/entities/prize-pvp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrizePvpService {
    schema: string = process.env.DB_SCHEMA;

    constructor(
        @InjectRepository(PrizePvp)
        private prizePvpRepository: Repository<PrizePvp>,
    ){}

    getPrizesPvp(){
        try {
            const query = `
            select 
                p.prizepvp_id,
                p.quantity,
                p.morethan,
                p.lessthan,
                i.id,
                i.name_english,
                i.name_aegis
            from ${this.schema}.prizepvp p
            inner join ${this.schema}.item_db i on i.id = p.item_id;
        `
        return this.prizePvpRepository.query(query)
        } catch (error) {
            throw error
        }
    }

    savePrizePvp(request: RequestSavePrizePvpDto){
        try {
            const { item_id, lessthan, morethan, quantity } = request
            const prizePvp = new PrizePvp()
            prizePvp.item_id = item_id
            prizePvp.lessthan = lessthan
            prizePvp.morethan = morethan
            prizePvp.quantity = quantity
            prizePvp.created_at = new Date()
            return this.prizePvpRepository.insert(prizePvp)
        } catch (error) {
            throw error
        }
    }

    async deletePrizePvp(id: number){
        try {
            await this.prizePvpRepository.delete({prizepvp_id: id})
            return {
                message: 'Ok'
            }
        } catch (error) {
            throw error
        }
    }
}
