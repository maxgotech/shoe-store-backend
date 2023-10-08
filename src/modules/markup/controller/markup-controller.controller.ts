import { Body, Controller, Post } from '@nestjs/common';
import { MarkupService } from '../service/markup-service.service';
import { AddMarkupDto } from '../dto/markup.dto';

@Controller('markup')
export class MarkupController {
    constructor(private readonly markupService:MarkupService){

    }

    @Post('add')
    public async AddMarkup(@Body() body:AddMarkupDto[])  {
        return await this.markupService.markup(body);  
    }
}
