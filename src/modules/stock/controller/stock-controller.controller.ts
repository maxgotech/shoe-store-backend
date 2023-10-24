import {Controller, Get, Query } from '@nestjs/common';
import { StockService } from '../service/stock-service.service';
@Controller('stock')
export class StockController{ 
    constructor(private readonly stockService: StockService) {}

    @Get('stockby/params?')
    public async FindStockByParams(
        @Query('userid') userid:number,
        @Query('type') type:string,
    ) {
        return await this.stockService.findStock(userid,type);  
    }

}
