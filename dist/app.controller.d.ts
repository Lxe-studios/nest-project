import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    index(req: any): void;
    userIndex(req: any): string;
}
