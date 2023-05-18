import {Body, Controller, Post} from '@nestjs/common';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {AuthEntity} from "@/auth/entities/auth.entity";
import {LoginDto} from "@/auth/dto/login.dto";
import {AuthService} from './auth.service';

@Controller('auth')
@ApiTags('authorization')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }
}