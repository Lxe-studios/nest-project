import { Controller, Get, Response } from '@nestjs/common';

@Controller('article')
export class ArticlesController {
  @Get()
  index(@Response() res) {
    // 设置cookie
    res.cookie('username', '我是cookie', {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
      signed: true,
    });
    res.send('这是文章页面')
  }

  @Get('add')
  addArticles() {
    return '增加articles';
  }
}
