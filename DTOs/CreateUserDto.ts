import { IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string = '';

    @IsString()
    @IsEmail()
    email: string = '';

    @IsNumber()
    age: number = 0;

    @IsString()
    @MinLength(6)
    password: string = '';
}