import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  @Get()
  @Render('default/upload')
  index() {}

  @Post('doAdd')
  @UseInterceptors(FileInterceptor('file'))
  doAdd(@Body() body, @UploadedFile() file) {
    // file图片16进制信息
    console.log(body, file);
    const writeStream = createWriteStream(
      join(__dirname, '../../public/upload', `${file.originalname}`),
    );
    writeStream.write(file.buffer);
    return '成功';
  }
}
