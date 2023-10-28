import { Injectable, Inject, BadGatewayException, BadRequestException } from '@nestjs/common';
import { AddMarkupDto } from '../dto/markup.dto';
import { Stock } from "src/db/models";

@Injectable()
export class MarkupService {
    constructor(@Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock) {}
    
    async markup(body:AddMarkupDto[]){
        const products_markup =[]
        for await(const element of body){
            if('Id'in element && 'markup' in element){
                const stock = await this.stockRepository.findOne({
                    where:{
                        id:element.Id
                    }
                })
                    if(stock!=null){
                        products_markup.push(element)
                        await stock.update({markup:element.markup})
                        await stock.save()
                    }
            }
        }
        if(products_markup.length==0){
            throw new BadRequestException('No products to add markup to')
        }
        const success = {
            "products":products_markup
        }
        return(success)
    }
}
