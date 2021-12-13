import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'auth/auth.module';
import { UsersModule } from 'users/users.module';
import { SectionModule } from 'section/section.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { default as config } from './config';

const userString = config.db.user && config.db.pass ? (config.db.user + ':' + config.db.pass + '@') : '';
const authSource = `?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@${config.db.database}@`;
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://' + userString + config.db.host +'/' + config.db.database + authSource, { useNewUrlParser: true, useUnifiedTopology: true }),
    EmailModule,
    AuthModule,
    UsersModule,
    SectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
