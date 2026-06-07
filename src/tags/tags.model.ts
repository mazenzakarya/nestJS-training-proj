import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true, nullable: false})
    name!: string;

    @Column({unique: true, nullable: false})
    slug!: string;

    @Column({type: 'text', nullable: true})
    description?: string;

    @Column({type: 'text', nullable: true})
    schema?: string;

    @Column({nullable: true})
    featuredImage?: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}