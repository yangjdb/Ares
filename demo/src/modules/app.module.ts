import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ConfigModule } from "./config/config.module";
import { CommonModule } from "./common/common.module";
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
    modules: [ConfigModule, CommonModule, CatsModule],
})
export class ApplicationModule implements NestModule {
    
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LoggerMiddleware)
            .with('ApplicationModule')
            .forRoutes(CatsController);
        // return super.configure(consumer);
    }
}
