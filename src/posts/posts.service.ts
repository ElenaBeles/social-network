import { Injectable } from '@nestjs/common';
import {PrismaService} from "@/prisma/prisma.service";
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto, authorId: number) {
    return this.prisma.post.create({ data: {
      ...createPostDto,
        authorId
    } });
  }

  findAll(authorId: number) {
    return this.prisma.post.findMany({ where: {authorId}});
  }

  findOne(id: number) {
    return this.prisma.post.findFirst({ where: { id }});
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: {id}});
  }
}
