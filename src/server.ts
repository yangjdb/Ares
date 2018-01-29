import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as session from 'express-session';
import * as redis from 'connect-redis';

async function bootstrap() {
    const config = require('../config/dev.config.js');
    console.log(config);
    const redisStrore = redis(session);
    const app = await NestFactory.create(ApplicationModule);
    await app.set('view engine', 'pug');
    await app.set('views', './views');
    await app.use(session({
        name: "sid",
        secret: 'nest',
        resave: true,
        rolling: true,
        saveUninitialized: false,
        cookie: config.cookie,
        store: new redisStrore(config.redis)
    }));
    
    await app.listen(config.server.port || 3000);
}

bootstrap().then(() => {
    console.log('Nest Application Start Success.');
});
