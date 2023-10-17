import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Stock } from "src/db/models";
@Injectable()
export class StockService {
    constructor(@Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock) {}

    async findAll() {
      return this.stockRepository.findAll()
    }
}