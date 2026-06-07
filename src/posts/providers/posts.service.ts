import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../DTOs/CreatePostDto';
import { Post } from '../posts.model';
import { Repository } from 'typeorm';
import { UsersService } from '../../users/providers/users.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService 
{
    constructor(
        private readonly userService: UsersService,
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,
    ) { }
    public async createPost(createPostDto: CreatePostDto) {}

}
