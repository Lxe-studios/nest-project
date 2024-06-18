import { Controller, Get, Query, UseGuards, UsePipes } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsPipe } from 'src/pipe/news/news.pipe';
import * as Joi from '@hapi/joi';
import { AuthGuard } from 'src/guard/auth/auth.guard';

const schema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
});

@Controller('news')
// @UseGuards(AuthGuard)
export class NewsController {
  // 注入服务
  constructor(private newsServices: NewsService) {}

  // @Get('add')
  // index() {
  //   console.log(this.newsServices.findAll());
  //   return this.newsServices.findAll();
  // }

  @Get()
  @UsePipes(new NewsPipe(schema))
  index(@Query() info) {
    console.log(info);
    return '新闻';
  }
}
