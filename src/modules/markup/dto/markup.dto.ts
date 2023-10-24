import { IsNotEmpty } from 'class-validator';

export class AddMarkupDto {
  markup:ProductMarkup[]
}

 class ProductMarkup{
    @IsNotEmpty()
    id:number

    @IsNotEmpty()
    markup:number
 }