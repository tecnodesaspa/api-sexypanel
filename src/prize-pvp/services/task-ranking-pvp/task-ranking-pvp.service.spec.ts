import { Test, TestingModule } from '@nestjs/testing';
import { TaskRankingPvpService } from './task-ranking-pvp.service';

describe('TaskRankingPvpService', () => {
  let service: TaskRankingPvpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskRankingPvpService],
    }).compile();

    service = module.get<TaskRankingPvpService>(TaskRankingPvpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
