import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import {PrismaService} from "@/prisma/prisma.service";
import {CreateProfileDto} from "@/profiles/dto/create-profile.dto";
import {use} from "passport";

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    return this.prisma.profile.create({
      data: createProfileDto
    });
  }

  findOne(id: number) {
    return this.prisma.profile.upsert({
        where: { userId: id },
        update: {},
        create: {
            university: '',
            userId: id
        },
        include: {
            user: true
        }
    });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prisma.profile.update({
          where: {
            userId: id
          },
          data: updateProfileDto
        },
        );
  }

  remove(id: number) {
    return this.prisma.profile.delete(
        {
          where: {
            userId: id
          }
        });
  }
}
