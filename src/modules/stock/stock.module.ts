import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { StockController } from './controller/stock-controller.controller';
import { StockService } from './service/stock-service.service';
import { stockProviders } from 'src/db/repos/stock.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [StockController],
    providers: [StockService,
        ...stockProviders],
})
export class StockModule {}
