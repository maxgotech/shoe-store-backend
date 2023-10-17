import {Controller, Post } from '@nestjs/common';
import { StockService } from '../service/stock-service.service';
@Controller('stock')
export class StockController{ 
    constructor(private readonly stockService: StockService) {}

    @Post('all')
    public async login() {
        return await this.stockService.findAll();  
    }

}
