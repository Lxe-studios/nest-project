"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const articles_controller_1 = require("./articles/articles.controller");
const user_controller_1 = require("./user/user.controller");
const news_service_1 = require("./news/news.service");
const news_controller_1 = require("./news/news.controller");
const articles_service_1 = require("./articles/articles.service");
const upload_controller_1 = require("./upload/upload.controller");
const product_controller_1 = require("./product/product.controller");
const init_middleware_1 = require("./middleware/init/init.middleware");
const user_middleware_1 = require("./middleware/user/user.middleware");
const posts_module_1 = require("./posts/posts.module");
function logger(req, res, next) {
    console.log('函数式中间件');
    next();
}
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(init_middleware_1.InitMiddleware)
            .forRoutes('*')
            .apply(user_middleware_1.UserMiddleware)
            .forRoutes('user');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [posts_module_1.PostsModule],
        controllers: [
            app_controller_1.AppController,
            articles_controller_1.ArticlesController,
            user_controller_1.UserController,
            news_controller_1.NewsController,
            upload_controller_1.UploadController,
            product_controller_1.ProductController,
        ],
        providers: [app_service_1.AppService, news_service_1.NewsService, articles_service_1.ArticlesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map