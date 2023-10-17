import {Controller, Body, Post, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from '../service/auth-services.service';
@Controller('auth')
export class AuthController{ 
    constructor(private readonly authService: AuthService) {}

    @Post('test')
    public async login() {
        return await this.authService.findAll();  
    }

}
