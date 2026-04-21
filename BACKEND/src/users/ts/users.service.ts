import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../../../prisma/prisma.service";

import { CreateUserDto } from "../dto/user.dto";

import { UpdateUserDto } from "../dto/user_update.dto";

import * as bcrypt from "bcrypt";


@Injectable()

export class UsersService
{
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto)
  {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });

    if (existing)
      throw new ConflictException("E-mail já cadastrado.");

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: { ...dto, password: hashedPassword },
    });
  }

  async findAll()
  {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
    });
  }

  async findOne(id: string)
  {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user)
      throw new NotFoundException("Usuário não encontrado.");

    return user;
  }

  async findByEmail(email: string)
  {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: string, dto: UpdateUserDto)
  {
    await this.findOne(id);

    if (dto.password)
      dto.password = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.update({ where: { id }, data: dto });
  }

  async remove(id: string)
  {
    await this.findOne(id);
    return this.prisma.user.delete({ where: { id } });
  }
}
