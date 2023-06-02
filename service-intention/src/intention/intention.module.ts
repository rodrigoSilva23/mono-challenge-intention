import { Module } from '@nestjs/common';
import { IntentionService } from './intention.service';
import { IntentionController } from './intention.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { IntentionRepository } from './repository/intention.repository';

@Module({
  controllers: [IntentionController],
  providers: [IntentionService, PrismaService, IntentionRepository],
})
export class IntentionModule {}
