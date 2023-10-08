import { AuthModule } from './modules/auth/auth.module';
import { MarkupModule } from './modules/markup/markup.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    MarkupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
