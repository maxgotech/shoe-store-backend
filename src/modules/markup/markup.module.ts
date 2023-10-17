import { Module } from '@nestjs/common';
import { MarkupService } from './service/markup-service.service';
import { MarkupController } from './controller/markup-controller.controller';
import { DatabaseModule } from 'src/db/database.module';
import { stockProviders } from 'src/db/repos/stock.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [MarkupController],
    providers: [MarkupService,
        ...stockProviders],
})
export class MarkupModule {}
