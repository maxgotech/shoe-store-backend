import { IsNotEmpty } from 'class-validator';

export class AddMarkupDto {
  markup:ProductMarkup[]
}


 class ProductMarkup{
    @IsNotEmpty()
    product:number

    @IsNotEmpty()
    markup:number
 }