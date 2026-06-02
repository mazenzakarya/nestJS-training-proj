import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../../DTOs/CreateUserDto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }


    @Get()
    public getUsers() {
        return 'This action returns all users';
    }

    @Post()
    // public createUser(@Body(new ValidationPipe())requestBody: CreateUserDto) {
    public createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }



}
