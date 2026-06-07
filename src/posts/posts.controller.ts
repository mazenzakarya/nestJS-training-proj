import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './DTOs/CreatePostDto';


@Controller('posts')
export class PostsController {

    constructor(
        private readonly postsService: PostsService
    ) { }

    @Post()
    public async createPost(@Body() createPostDto: CreatePostDto) {
        return await this.postsService.createPost(createPostDto);
    }
}
