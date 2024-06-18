import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from './guard/auth/auth.guard';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 配置静态资源目录
  // app.useStaticAssets('public');

  // 配置虚拟静态资源目录
  app.useStaticAssets('public', {
    prefix: '/static/',
  });

  // app.useStaticAssets(join(__dirname, '..', 'public'), {
  //   prefix: '/static/',
  // });

  // 配置模版引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  // 配置cookie中间件
  // 参数： 加密密钥
  app.use(cookieParser('1234'));

  // 配置session
  app.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 60000, httpOnly: true },
      rolling: true,
    }),
  );

  // 引入全局守卫
  app.useGlobalGuards(new AuthGuard());

  // swagger
  const options = new DocumentBuilder()
    .setTitle('博客api')
    .setDescription('api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();

// 全局中间件无法引入类中间件，只能引入函数式中间件
