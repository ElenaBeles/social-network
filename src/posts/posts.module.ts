import { Module } from '@nestjs/common';
import {PostsController} from "@/posts/posts.controller";
import {PostsService} from "@/posts/posts.service";

@Module({
    providers: [PostsService],
    controllers: [PostsController]
})
export class PostsModule {}
