import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import {LoggerMiddleware} from './$common/middlewares/logger.middleware';
import {StartModule} from './$start/start.module';
import { CatsModule } from './cats/cats.module';

@Module({
    modules: [StartModule, CatsModule],
})
export class ApplicationModule implements NestModule {
    
    public configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LoggerMiddleware)
            .with('ApplicationModule');
    }
}
