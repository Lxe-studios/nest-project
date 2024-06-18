import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';
// 控制器负责处理传入的请求，并返回对客户端的响应
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Render('default/index')
  index(@Request() req) {
    // return this.appService.getHello();
    // return { name: '章三', age: 18 };
    req.session.username = 'hahah'
  }

  @Get('user') 
  userIndex(@Request() req) {
    console.log(req.session.username)
    return '用户中心'
  }
}
