import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VoteDto } from '../../../vote/dtos/vote.dto';
import { Vote } from '../../../vote/entities/vote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VoteService {

    private schema: string = process.env.DB_SCHEMA;
    constructor(
        @InjectRepository(Vote)
        private voteRepository: Repository<Vote>,
    ){}

    async vote(request: VoteDto){
        try {
        const { email, ip, rank } = request
        const date = new Date()
        const query = `
            select * from ${this.schema}.vote v
            where v.rank = '${rank}' and
            v.created_at = '${JSON.stringify(date).substring(1, 11)}' and
            (v.email = '${email}' or v.ip = '${ip}')
            LIMIT 1;
        `
        const vote = await this.voteRepository.query(query)
        
        if(!vote || vote.length == 0){
            const newVote = new Vote()
            newVote.created_at = new Date()
            newVote.email = email;
            newVote.ip = ip;
            newVote.rank = rank;
            newVote.is_reclamed = false;
            await this.voteRepository.insert(newVote)
        }
        return {
            message: 'Ok'
        }
    } catch (error) {
        throw error
    }
    }

}
