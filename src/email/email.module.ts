import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { LoggerMiddleware } from '../common/middlewares/logger.middleware';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService],
	exports: [EmailService],
})
export class EmailModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
     consumer
      .apply(LoggerMiddleware)
      .forRoutes(EmailController);
   }
}
