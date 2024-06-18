import { Body, Controller, Get, Param, Post, Query, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '帖子标题' })
  title: string;
  @ApiProperty({ description: '帖子内容' })
  content: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get('detail')
  @ApiOperation({ summary: '显示博客列表' })
  index() {
    return '帖子';
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  //   @Query() query, @Param Param
  create(@Body() body: CreatePostDto) {
    console.log(body);
    return { success: true };
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  detail() {
    return {
      id: 1,
      title: '111',
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() Body) {
    return {
      success: true,
    };
  }
}
