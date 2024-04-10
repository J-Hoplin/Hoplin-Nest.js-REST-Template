import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LoggerModule, AuthenticationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
