import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {CreatePostDto} from "@/posts/dto/create-post.dto";
import {PostsService} from "@/posts/posts.service";

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    getAll () {
       // return this.postsService.getAll();


        return ['1', '2', '3'];
    }

    @Get(':id')
    getById (@Param(':id') id: string) {
        return this.postsService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() entity: CreatePostDto) {
        this.postsService.create(entity);
    }

    @Delete()
    delete (@Param(':id') id: string) {
        console.log('delete')
        return [];
    }
}
