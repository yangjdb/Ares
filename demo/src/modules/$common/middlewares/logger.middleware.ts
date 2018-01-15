import {Middleware} from '@nestjs/common';

@Middleware()
export class LoggerMiddleware {
    public resolve(name) {
        return (req, res, next) => {
            console.log(`[${name}] Request...`); // [ApplicationModule] Request...
            next();
        };
    }
}
