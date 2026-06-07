import { Injectable } from '@nestjs/common';
import { User } from '../users.model';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from '../DTOs/UpdateUserDto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ) { }

    public async createUser(createUserDto: any) {
        const existingUser = await this.usersRepository.findOne({ where: { email: createUserDto.email } });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }
        const user = this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(user);
    }
    // get all users
    public async getAllUsers() {
        return await this.usersRepository.find();
    }
    // get user by id
    public async getUserById(id: number) {
        return await this.usersRepository.findOne({ where: { id } });
    }
    //update user by id
    public async updateUser(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.usersRepository.findOne({where: {id}});
        if (!user) {
            throw new Error('User not found');
        }
        user.name = updateUserDto.name ?? user.name;
        user.email = updateUserDto.email ?? user.email;
        user.age = updateUserDto.age ?? user.age;
        user.password = updateUserDto.password ?? user.password;
        return await this.usersRepository.save(user);
    }
    // delete user by id
    public async deleteUser(id: number) {
        const user = await this.usersRepository.findOne({where: {id}});
        if (!user) {
            throw new Error('User not found');
        }
        return await this.usersRepository.remove(user);
    }
    //soft delete user by id
    public async softDeleteUser(id: number) {
        const user = await this.usersRepository.findOne({where: {id}});
        if (!user) {
            throw new Error('User not found');
        }
        return await this.usersRepository.softRemove(user);
    }
}