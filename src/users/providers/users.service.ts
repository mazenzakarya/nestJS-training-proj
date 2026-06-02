import { Injectable } from '@nestjs/common';
import { User } from '../users.model';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { InjectRepository } from '@nestjs/typeorm';

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

}