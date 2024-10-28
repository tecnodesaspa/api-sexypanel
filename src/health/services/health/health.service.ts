import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from '../../../login/entities/login.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
  ) {}

  getStatus() {
    return new Promise(async (resolve, reject) => {
      try {
        const totalUsers = await this.loginRepository.count({
          where: { group_id: 0 },
        });
        const connectedUsers = await this.loginRepository.count({
          where: { web_auth_token_enabled: 1 },
        });
        resolve({
          totalUsers,
          connectedUsers,
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
