import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestUpdateLockUserDto } from '../../../locks/dtos/request-update-lock-user.dto';
import { Lock } from '../../../locks/entities/lock.entity';
import { Login } from '../../../login/entities/login.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocksService {
  constructor(
    @InjectRepository(Lock)
    private lockRepository: Repository<Lock>,
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
  ) {}

  async saveOrUpdateLockService(body: RequestUpdateLockUserDto) {
    try {
      const lock = await this.lockRepository.findOneBy({
        account_id: body.account_id,
      });
      if (lock) {
        lock.admin = body.admin;
        lock.end_date_ban = body.end_date_ban;
        lock.end_date_bg_lock = body.end_date_bg_lock;
        lock.end_date_woe_lock = body.end_date_woe_lock;
        lock.is_ban = body.is_ban;
        lock.is_bg_lock = body.is_bg_lock;
        lock.is_woe_lock = body.is_woe_lock;
        lock.start_date_ban = body.start_date_ban;
        lock.start_date_bg_lock = body.start_date_bg_lock;
        lock.start_date_woe_lock = body.start_date_woe_lock;
        await this.lockRepository.save(lock);
      } else {
        const newLock = new Lock();
        newLock.account_id = body.account_id;
        newLock.admin = body.admin;
        newLock.end_date_ban = body.end_date_ban;
        newLock.end_date_bg_lock = body.end_date_bg_lock;
        newLock.end_date_woe_lock = body.end_date_woe_lock;
        newLock.is_ban = body.is_ban;
        newLock.is_bg_lock = body.is_bg_lock;
        newLock.is_woe_lock = body.is_woe_lock;
        newLock.start_date_ban = body.start_date_ban;
        newLock.start_date_bg_lock = body.start_date_bg_lock;
        newLock.start_date_woe_lock = body.start_date_woe_lock;
        await this.lockRepository.insert(newLock);
      }

      if (body.is_ban) {
        await this.loginRepository.update(
          { account_id: body.account_id },
          { state: 1 },
        );
      } else {
        await this.loginRepository.update(
          { account_id: body.account_id },
          { state: 0 },
        );
      }
      return {
        message: 'Jugador actualizado',
      };
    } catch (error) {
      throw error;
    }
  }
}
