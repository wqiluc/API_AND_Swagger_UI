import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";

import { PrismaModule } from "./prisma/prisma.module";

import { UsersModule } from "./src/users/ts/users.module";

import { AuthModule } from "./src/auth/ts/auth.module";

@Module
(
  {
    imports:
    [
      ConfigModule.forRoot({ isGlobal: true }),

      PrismaModule,

      UsersModule,

      AuthModule,

    ],

    controllers: [AppController],
  }
)


export class AppModule 
{ }