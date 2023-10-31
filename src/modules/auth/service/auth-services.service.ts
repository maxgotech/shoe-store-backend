import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { User } from "src/db/models";
import { LoginDto } from '../dto/user-login.dto';
import { RegDto } from '../dto/user-reg.dto';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User) {}

    async reg(userDto:RegDto){
      if(userDto.mail==null||userDto.name==null||userDto.surname==null||userDto.password==null){
        throw new BadRequestException('Incorrect data')
      }

      const check = await this.userRepository.findOne({
        where:{
          mail:userDto.mail
        }
      })

      if(check!=null){
        throw new BadRequestException('User already exists')
      } 

      const user = this.userRepository.build({
        name: userDto.name,
        surname: userDto.surname,
        mail: userDto.mail,
        password: userDto.password
      })
      
      await user.save()

      const response = await this.userRepository.findOne({
        where:{
          mail:userDto.mail
        }
      })

      return response
    }

    async log(userDto:LoginDto){

      if(userDto.mail==null||userDto.password==null){
        throw new BadRequestException('Incorrect data')
      }

      const check = await this.userRepository.findOne({
        where:{
          mail:userDto.mail
        }
      })

      if(check==null){
        throw new NotFoundException("User not found")
      }

      if(check.toJSON().password!=userDto.password){
        throw new BadRequestException('Incorrect passowrd')
      }

      const response = {
        "success":1,
        "message":"user data is correct",
        "data":check.toJSON()
      }

      return response

    }

}