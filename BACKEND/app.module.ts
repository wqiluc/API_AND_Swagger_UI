import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/ts/users.module';
import { AuthModule } from './auth/ts/auth.module';

@Module
(
    {
        imports: [PrismaModule, UsersModule, AuthModule],
        controllers: [AppController],
    }
)

export class AppModule 
{}