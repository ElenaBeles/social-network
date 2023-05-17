import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "@/posts/dto/create-post.dto";
import {AuthDto} from "@/authorization/dto/auth.dto";

@Injectable()
export class AuthorizationService {
    private posts = [];

    create(post: AuthDto) {
        this.posts.push({
            ...post,
            id: Math.random()
        });
    }
}
