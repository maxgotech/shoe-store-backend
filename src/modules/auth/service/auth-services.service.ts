import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { User } from "src/db/models";
@Injectable()
export class AuthService {
    constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User) {}

    async findAll() {
      return this.userRepository.findAll()
    }
}