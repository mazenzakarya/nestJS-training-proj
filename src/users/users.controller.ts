import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './DTOs/CreateUserDto';
import { UsersService } from './providers/users.service';
import { UpdateUserDto } from './DTOs/UpdateUserDto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }


    @Get()
    public getUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    // public createUser(@Body(new ValidationPipe())requestBody: CreateUserDto) {
    public createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Get(':id')
    public getUserById(@Param('id') id: number) {
        return this.usersService.getUserById(id);
    }

    @Delete(':id')
    public deleteUser(@Param('id') id: number) {
        return this.usersService.deleteUser(id);
    }

    @Delete('soft/:id')
    public softDeleteUser(@Param('id') id: number) {
        return this.usersService.softDeleteUser(id);
    }

    @Put(':id')
    public updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(id, updateUserDto);
    }


}
