import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll() {
    return [{ title: 'x1' }, { title: 'x2' }, { title: 'x3' }];
  }
}
