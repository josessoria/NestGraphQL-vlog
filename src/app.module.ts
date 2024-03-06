import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/post.module';
import {GraphQLModule} from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {join} from 'path';
import { ProductsModule } from './products/product.module';


@Module({
  imports: [
    

    PostsModule,ProductsModule
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
