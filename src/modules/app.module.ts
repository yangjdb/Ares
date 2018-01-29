import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommonModule } from "./common/common.module";
import { RenderMiddleware } from "../components/middlewares/render.middleware";
import { WebModule } from "./web/web.module";

@Module({
    modules: [CommonModule, WebModule],
})
export class ApplicationModule implements NestModule {
    
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(RenderMiddleware)
            .with('ApplicationModule')
            .forRoutes(
                {path: '*', method: RequestMethod.GET}
            );
        // return super.configure(consumer);
    }
}
