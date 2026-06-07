import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    @MaxLength(100)
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