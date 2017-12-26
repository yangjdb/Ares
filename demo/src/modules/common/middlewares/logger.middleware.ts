import {ExpressMiddleware, Middleware, NestMiddleware} from '@nestjs/common';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
    public resolve(name: string): ExpressMiddleware {
        return (req, res, next) => {
            console.log(`[${name}] Request...`); // [ApplicationModule] Request...
            next();
        };
    }
}
