import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name?: string;

    @IsEmail()
    email?: string;

    @IsNumber()
    age?: number;

    @IsString()
    @MinLength(6)
    password?: string;
}