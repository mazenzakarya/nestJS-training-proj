import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export default class CreatePostsDto {
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    title: string = '';
    @IsNotEmpty()
    content: string = '';
    
    tags: string[] = [];
}

