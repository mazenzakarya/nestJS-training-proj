import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.model';


@Module({
  imports: [UsersModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      database: 'testdb',
      entities: [User],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: '123'
    }),

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
