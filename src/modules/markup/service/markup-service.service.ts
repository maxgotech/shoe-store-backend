import { Injectable } from '@nestjs/common';
import { AddMarkupDto } from '../dto/markup.dto';

@Injectable()
export class MarkupService {

    async markup(body:AddMarkupDto[]){
        const products_markup =[]
        try {
            body.forEach(element => {
                if('product'in element && 'markup' in element){
                    console.log(element)
                    products_markup.push(element)
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
