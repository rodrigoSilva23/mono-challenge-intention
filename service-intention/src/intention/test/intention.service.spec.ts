import { Test, TestingModule } from '@nestjs/testing';
import { IntentionService } from '../intention.service';

describe('IntentionService', () => {
  let intentionService: IntentionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntentionService],
    }).compile();

    intentionService = module.get<IntentionService>(IntentionService);
  });

  it('should be defined', () => {
    expect(intentionService).toBeDefined();
  });
});
