import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateLoginDto
{

    @IsOptional()
    @IsEmail()
    email!: string;
    
    @IsString()
    @MinLength(10)
    password!: string;
}