import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.model';
import { TagsModule } from './tags/tags.module';
import { PostsModule } from './posts/posts.module';
import { MetaOptionModule } from './meta-option/meta-option.module';
import { MetaOption } from './meta-option/meta-option.model';
import { Post } from './posts/posts.model';
import { Tag } from './tags/tags.model';


@Module({
  imports: [UsersModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      database: 'testdb',
      entities: [User, MetaOption, Post, Tag],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: '123'
    }),

  }), TagsModule, PostsModule, MetaOptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
