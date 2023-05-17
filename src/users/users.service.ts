import { Injectable } from '@nestjs/common';
import {PrismaService} from "@/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userExist = this.prisma.user.findFirst({where: {email: createUserDto.email}});

    if(!!userExist) {
      throw new ReferenceError('User already exist');
    }

    const hashPassword = await bcrypt.hash(
        createUserDto.password,
        roundsOfHashing,
    );

    createUserDto.password = hashPassword;

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
          updateUserDto.password,
          roundsOfHashing,
      );
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}