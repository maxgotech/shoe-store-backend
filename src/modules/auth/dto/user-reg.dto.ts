import { IsNotEmpty } from 'class-validator';

export class RegDto {

  @IsNotEmpty()
  name:string

  @IsNotEmpty()
  surname:string

  @IsNotEmpty()
  mail:string

  @IsNotEmpty()
  password:string
  
}