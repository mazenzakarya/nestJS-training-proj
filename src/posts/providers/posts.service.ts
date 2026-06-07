import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../DTOs/CreatePostDto';
import { Post } from '../posts.model';
import { Repository } from 'typeorm';
import { UsersService } from '../../users/providers/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../../meta-option/meta-option.model';

@Injectable()
export class PostsService {
    constructor(
        private readonly userService: UsersService,
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,

        @InjectRepository(MetaOption)
        private readonly metaOptionRepository: Repository<MetaOption>

    ) { }
    public async createPost(createPostDto: CreatePostDto) {

        let post = this.postsRepository.create(createPostDto);
        let metaOption = createPostDto.metaOptions ? this.metaOptionRepository.create(createPostDto.metaOptions) : null;
        if (metaOption) {
             post.metaOptions = metaOption; 
        }
        const user = await this.userService.getUserById(createPostDto.authorId);
        if (!user) {
            throw new Error('Author not found');
        }
        post.author = user;
        return await this.postsRepository.save(post);
    }

}
