import { ExpressMiddleware, Middleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class RenderMiddleware implements NestMiddleware {
    resolve(name: string): ExpressMiddleware {
        return (req, res, next) => {
            console.log(`[${name}] Request...`); // [ApplicationModule] Request...
            next();
        };
    }
}
