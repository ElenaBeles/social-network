import {Injectable} from "@nestjs/common";
import {CreatePostDto} from "@/posts/dto/create-post.dto";

@Injectable()
export class PostsService {
    private posts = [];

    getAll() {
        return this.posts;
    }

    getById(id: string) {
        return this.posts.find(post => post.id === id) ?? null;
    }

    create(post: CreatePostDto) {
        this.posts.push({
            ...post,
            id: Math.random()
        });
    }
}