import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConnectionUser } from '../../../connection-user/entities/connection-user.entity';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class ConnectionUserService {
    schema: string = process.env.DB_SCHEMA;

    constructor(
        @InjectRepository(ConnectionUser)
        private connectionUserRepository: Repository<ConnectionUser>,
    ){}
    getMyLastConnection(email: string){
        const now = new Date()
        const date = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-01`)
        return this.connectionUserRepository.findOne({
            where: {
                email,
                connection_date: MoreThan(date)
            },
            order: {
                day: 'DESC'
            }
        })
    }
}
