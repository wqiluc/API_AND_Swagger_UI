import { Injectable, UnauthorizedException } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";

import { UsersService } from "../../users/ts/users.service";

import { LoginDto } from "../dto/login.dto";

import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService
{
  constructor
  (
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) 
  {}

  async login(dto: LoginDto)
  {
    const user = await this.usersService.findByEmail(dto.email);

    if (!user)
      throw new UnauthorizedException("Credenciais de Usuário Inválidas.");

    const hashedPassword = await bcrypt.hash('anonovo1234abcd', 10);
    const passwordMatch = await bcrypt.compare(dto.password, user.password); // hashedpassword = user.password criptografado pelo bycript

    if (!passwordMatch)
      throw new UnauthorizedException("Credenciais de Usuário Inválidas.");

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}