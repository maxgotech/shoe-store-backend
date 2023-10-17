import { StockModule } from './modules/stock/stock.module';
import { AuthModule } from './modules/auth/auth.module';
import { MarkupModule } from './modules/markup/markup.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    StockModule,
    AuthModule,
    MarkupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
