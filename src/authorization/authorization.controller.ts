import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthorizationService} from "@/authorization/authorization.service";
import {AuthDto} from "@/authorization/dto/auth.dto";

@Controller('auth')
export class AuthorizationController {
    constructor(private authService: AuthorizationService) {
    }
    @Post('login')
    @HttpCode(HttpStatus.CREATED)
    login(@Body() entity: AuthDto) {
        return this.authService.create(entity);
    }

    @Post('sign-up')
    @HttpCode(HttpStatus.CREATED)
    registration(@Body() entity: AuthDto) {
        return this.authService.create(entity);
    }
}