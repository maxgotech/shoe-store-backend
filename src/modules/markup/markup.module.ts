import { Module } from '@nestjs/common';
import { MarkupService } from './service/markup-service.service';
import { MarkupController } from './controller/markup-controller.controller';

@Module({
    imports: [],
    controllers: [MarkupController],
    providers: [MarkupService],
})
export class MarkupModule {}
