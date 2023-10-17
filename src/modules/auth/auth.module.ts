import { Module } from '@nestjs/common';
import { AuthService } from './service/auth-services.service';
import { AuthController } from './controller/auth-controller.controller';
import { userProviders } from 'src/db/repos/user.providers';
import { DatabaseModule } from 'src/db/database.module';
@Module({
    imports: [DatabaseModule],
    controllers: [AuthController],
    providers: [AuthService,
        ...userProviders],
})
export class AuthModule {}
