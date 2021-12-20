import {
  Module, MiddlewareConsumer, NestModule
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterController } from './register.controller';
import { CompanySchema, VideoSchema } from './schemas/register.schema';
import { LoggerMiddleware } from '../common/middlewares/logger.middleware';
import { RegisterService } from './register.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Companies', schema: CompanySchema },
    { name: 'Videos', schema: VideoSchema },
  ])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
     consumer
      .apply(LoggerMiddleware)
      .forRoutes(RegisterController);
   }
}
