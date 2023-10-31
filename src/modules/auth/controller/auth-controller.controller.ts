import {Controller, Body, Post } from '@nestjs/common';
import { AuthService } from '../service/auth-services.service';
import { RegDto } from '../dto/user-reg.dto';
import { LoginDto } from '../dto/user-login.dto';
@Controller('auth')
export class AuthController{ 
    constructor(private readonly authService: AuthService) {}

    @Post('reg')
    public async reg(@Body() user_data:RegDto) {
        return await this.authService.reg(user_data);  
    }

    @Post('log')
    public async login(@Body() user_data:LoginDto) {
        return await this.authService.log(user_data);  
    }

}
