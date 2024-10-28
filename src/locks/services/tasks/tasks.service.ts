import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Lock } from '../../../locks/entities/lock.entity';
import { Login } from '../../../login/entities/login.entity';
import { LessThan, MoreThan, Repository } from 'typeorm';

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | months
// | | | day of month
// | | hours
// | minutes
// seconds (optional)

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    @InjectRepository(Lock)
    private lockRepository: Repository<Lock>,
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_10AM)
  async regularizeLocks() {
    try {
      // desbloqueos BG
      const bgLocks = await this.lockRepository.find({
        where: { end_date_bg_lock: LessThan(new Date()), is_bg_lock: true },
      });
      for await (const bg of bgLocks) {
        bg.start_date_bg_lock = null;
        bg.end_date_bg_lock = null;
        bg.count_bg_locks = bg.count_bg_locks ? bg.count_bg_locks + 1 : 1;
        bg.is_bg_lock = false;
        await this.lockRepository.save(bg);
      }
      this.logger.debug(`bgLocks: ${JSON.stringify(bgLocks)}`);
    } catch (error) {
      this.logger.error(`Error bgLocks: ${JSON.stringify(error)}`);
    }
    try {
      // desbloqueos WOE
      const woeLocks = await this.lockRepository.find({
        where: { end_date_woe_lock: LessThan(new Date()), is_woe_lock: true },
      });
      for await (const woe of woeLocks) {
        woe.start_date_woe_lock = null;
        woe.end_date_woe_lock = null;
        woe.count_woe_locks = woe.count_woe_locks ? woe.count_woe_locks + 1 : 1;
        woe.is_woe_lock = false;
        await this.lockRepository.save(woe);
      }
      this.logger.debug(`WoeLocks: ${JSON.stringify(woeLocks)}`);
    } catch (error) {
      this.logger.error(`Error WoeLocks: ${JSON.stringify(error)}`);
    }
    try {
      // desbloqueos BAN
      const bans = await this.lockRepository.find({
        where: { end_date_ban: LessThan(new Date()), is_ban: true },
      });
      for await (const ban of bans) {
        ban.start_date_ban = null;
        ban.end_date_ban = null;
        ban.count_ban = ban.count_ban ? ban.count_ban + 1 : 1;
        ban.is_ban = false;
        await this.loginRepository.update(
          { account_id: ban.account_id },
          { state: 0 },
        );
        await this.lockRepository.save(ban);
      }
      this.logger.debug(`bans: ${JSON.stringify(bans)}`);
    } catch (error) {
      this.logger.error(`Error bans: ${JSON.stringify(error)}`);
    }
  }
}
