import { IsNotEmpty } from 'class-validator';

export class LoginDto {

  @IsNotEmpty()
  mail:string

  @IsNotEmpty()
  password:string
  
}