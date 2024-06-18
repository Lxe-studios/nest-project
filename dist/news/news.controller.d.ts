import { NewsService } from './news.service';
export declare class NewsController {
    private newsServices;
    constructor(newsServices: NewsService);
    index(info: any): string;
}
