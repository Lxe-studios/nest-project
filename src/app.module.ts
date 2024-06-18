import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './articles/articles.controller';
import { UserController } from './user/user.controller';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { ArticlesService } from './articles/articles.service';
import { UploadController } from './upload/upload.controller';
import { ProductController } from './product/product.controller';
import { InitMiddleware } from './middleware/init/init.middleware';
import { UserMiddleware } from './middleware/user/user.middleware';
import { PostsModule } from './posts/posts.module';

// 函数式中间件
function logger(req, res, next) {
  console.log('函数式中间件');
  next();
}

@Module({
  imports: [PostsModule],
  controllers: [
    AppController,
    ArticlesController,
    UserController,
    NewsController,
    UploadController,
    ProductController,
  ],
  providers: [AppService, NewsService, ArticlesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // *匹配所有路由
    // consumer.apply(InitMiddleware).forRoutes('news');
    // 配置多个中间件
    consumer
      .apply(InitMiddleware)
      .forRoutes('*')
      .apply(UserMiddleware)
      .forRoutes('user');

    // consumer.apply(UserMiddleware,InitMiddleware，logger)
  }
}
