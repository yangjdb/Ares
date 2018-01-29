import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.set('view engine', 'pug');
    await app.set('views', './views');
    await app.listen(3000);
}

bootstrap().then(() => {
    console.log('Nest Application Start Success.');
});
