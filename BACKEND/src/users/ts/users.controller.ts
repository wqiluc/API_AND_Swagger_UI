import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common";

import { AuthGuard } from "@nestjs/passport";

import { UsersService } from "./users.service";

import { CreateUserDto } from "../dto/user.dto";

import { UpdateUserDto } from "../dto/user_update.dto";

@Controller("users")
export class UsersController
{
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto)
  {
    return this.usersService.create(dto);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get()
  findAll()
  {
    return this.usersService.findAll();
  }


  @UseGuards(AuthGuard("jwt"))
  @Get(":id")
  findOne(@Param("id") id: string)
  {
    return this.usersService.findOne(id);
  }


  @UseGuards(AuthGuard("jwt"))
  @Put(":id")
  update(@Param("id") id: string, @Body() dto: UpdateUserDto)

  {
    return this.usersService.update(id, dto);
  }


  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  remove(@Param("id") id: string)
  {
    return this.usersService.remove(id);
  }
}