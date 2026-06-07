import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostStatus } from "./Enums/PostStatus.enum";
import { User } from "../users/users.model";
import { PostType } from "./Enums/PostType.enum";
import { MetaOption } from "../meta-option/meta-option.model";


@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    postId!: number;

    @Column()
    title!: string;

    @Column({
        type: 'enum',
        enum: PostType,
        nullable: false,
        default: PostType.POST

    })
    postType!: PostType;

    @Column({
        unique: true,
        nullable: false,

    })
    slug!: string;

    @Column({
        type: 'enum',
        enum: PostStatus,
        nullable: false,
        default: PostStatus.DRAFT
    })
    status!: PostStatus;

    @Column()
    content!: string;

    @Column()
    schema?: string;

    @Column()
    featuredImage!: string;

    @Column()
    publishedAt!: Date;

    @ManyToOne(() => User, user => user.posts)
    author!: User;

    @OneToOne(() => MetaOption, metaOption => metaOption.post)
    metaOptions?: MetaOption | null;

}