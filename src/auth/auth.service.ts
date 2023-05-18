import {BadRequestException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from "@/prisma/prisma.service";
import {AuthEntity} from "@/auth/entities/auth.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findFirst({ where: { email: email } });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      userId: user.id,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findFirst({where: {email: email}});

    const isMatch = await bcrypt.compare(password, user.password);
    if (user) {
      const {password, ...result} = user;
      if (isMatch)
        return result;
      throw new BadRequestException("Неверный пароль")
    }
    return null;
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where: {id}});
  }
}