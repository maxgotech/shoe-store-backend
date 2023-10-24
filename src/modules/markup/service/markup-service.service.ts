import { Injectable, Inject } from '@nestjs/common';
import { AddMarkupDto } from '../dto/markup.dto';
import { Stock } from "src/db/models";

@Injectable()
export class MarkupService {
    constructor(@Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock) {}
    
    async markup(body:AddMarkupDto[]){
        const products_markup =[]
        try {
            body.forEach(async element => {
                if('Id'in element && 'markup' in element){
                    products_markup.push(element)
                    const stock = await this.stockRepository.findOne({
                        where:{
                            id:element.Id
                        }
                    })
                    await stock.update({markup:element.markup})
                    await stock.save()
                    console.log(stock)
                }
            });
    
        const success = {
            "success":1,
            "products":products_markup
        }
        return(success)

        } catch {
            const error = {
                "success":0
            }
            return error
        }
    
    }
}
