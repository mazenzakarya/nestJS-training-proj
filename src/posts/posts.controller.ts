import { Body, Controller } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './DTOs/CreatePostDto';

@Controller('posts')
export class PostsController {

    constructor(
        private readonly postsService: PostsService
    ) { }
    public async createPost(@Body() createPostDto: CreatePostDto) {
        return await this.postsService.createPost(createPostDto);
    }
}
