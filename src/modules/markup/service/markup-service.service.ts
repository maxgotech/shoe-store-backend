import { Injectable } from '@nestjs/common';
import { AddMarkupDto } from '../dto/markup.dto';

@Injectable()
export class MarkupService {

    async markup(body:AddMarkupDto[]){
        try{
            body.forEach(element => {
                console.log(element)
            });
    
        const done = {
            "success":1,
            "products":body
        }
        return(done)
        } catch{
            const error = {
                "success":0
            }
            return error
        }
    
    }
}
