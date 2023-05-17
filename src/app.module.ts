import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

import { PrismaModule } from './prisma/prisma.module';
import { FriendsModule } from './friends/friends.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfilesModule } from './profiles/profiles.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PostEntity} from "@/posts/entities/post.entity";
import {UserEntity} from "@/users/entities/user.entity";

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              type: 'postgres',
              host: configService.get<string>('POSTGRES_HOST'),
              port: configService.get<number>('POSTGRES_PORT'),
              username: configService.get<string>('POSTGRES_USERNAME'),
              password: configService.get<string>('POSTGRES_PASSWORD'),
              database: configService.get<string>('POSTGRES_DATABASE'),
              entities: [PostEntity, UserEntity],
              synchronize: true,
              autoLoadEntities: true
          })
      }),
      PostsModule,
      FriendsModule,
      ProfilesModule,
      UsersModule,
      PrismaModule,
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}