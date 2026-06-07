import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../posts/posts.model';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    age!: number;

    @Column()
    password!: string;

    @OneToMany(() => Post, post => post.author)
    posts?: Post[];
}