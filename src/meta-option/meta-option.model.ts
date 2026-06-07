import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "../posts/posts.model";

@Entity()
export class MetaOption {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'json', nullable: false })
    metaValue!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToOne(() => Post, (post) => post.metaOptions, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    post!: Post;
}