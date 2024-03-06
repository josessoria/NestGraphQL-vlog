import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PostsService } from './post.service';

import { Posts } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<Posts[]> {
    return await this.postsService.findAll();
  }

  @Post()
  createProduct(@Body() data: Posts) {
    return this.postsService.createPost(data);
  }

}
