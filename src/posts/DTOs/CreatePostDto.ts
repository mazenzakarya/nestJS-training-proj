import { IsEAN, IsEnum, IsJSON, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { PostType } from "../Enums/PostType.enum";
import { PostStatus } from "../Enums/PostStatus.enum";

export class CreatePostDto {
    @IsString()
    @MinLength(4)
    @MaxLength(512)
    @IsNotEmpty()
    title!: string;

    @IsNotEmpty()
    @IsString()
    content: string = '';

    @IsEnum(PostType)
    postType: PostType = PostType.POST;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
            'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
    })
    @MaxLength(256)
    slug!: string;

    @IsEnum(PostStatus)
    status: PostStatus = PostStatus.DRAFT;

    @IsOptional()
    @IsJSON()
    schema: string = '';
    featuredImage: string = '';
    publishedAt: Date = new Date();
    authorId: number = 0;
    metaOptionsId: number = 0;
}