import { Module } from '@nestjs/common';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { PrismaService } from '../prisma/prisma.service'; // Import PrismaService

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService, PrismaService], // Include PrismaService here
})
export class PostsModule {}
