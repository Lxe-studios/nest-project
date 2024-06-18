"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const auth_guard_1 = require("./guard/auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets('public', {
        prefix: '/static/',
    });
    app.setBaseViewsDir('views');
    app.setViewEngine('ejs');
    app.use(cookieParser('1234'));
    app.use(session({
        secret: 'keyboard cat',
        cookie: { maxAge: 60000, httpOnly: true },
        rolling: true,
    }));
    app.useGlobalGuards(new auth_guard_1.AuthGuard());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('博客api')
        .setDescription('api')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map