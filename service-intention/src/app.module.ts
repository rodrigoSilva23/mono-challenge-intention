import { Global, Module } from '@nestjs/common';
import { IntentionModule } from './intention/intention.module';
import { PrismaService } from './prisma/prisma.service';

@Global()
@Module({
  imports: [IntentionModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
