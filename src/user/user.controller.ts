import { Controller, Get, Post, Query, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return 'user';
  }

  @Get('add')
  // 通过query装饰器获取get传值
  addData(@Query() query) {
    console.log(query);
    return 'adduser';
  }

  @Get('edit')
  // 通过request装饰器获取get传值
  editData(@Request() req) {
    //console.log(req.session,'edit');
    return 'editUser';
  }

  @Post('create')
  create() {
    console.log('post');
    return 'post create';
  }

  @Get('cookie')
  getCookie(@Request() req) {
    // 不加密普通cookie
    // console.log(req.cookies.username);
    // 加密cookie
    // req.session.username = 'qqq'

    console.log(req.session.username,'555');
    return '登录成功'
  }
}
