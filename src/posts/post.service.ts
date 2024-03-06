import { Injectable } from '@nestjs/common';
import { Posts } from '@prisma/client'; // Import the Posts interface
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Posts[]> {
    // Use Prisma to fetch posts
    return this.prisma.posts.findMany();
  }

  async createPost(data: Posts) {
    return this.prisma.posts.create({
      data,
    });
  }


}
