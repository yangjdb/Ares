import { ExpressMiddleware, Middleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class RenderMiddleware implements NestMiddleware {
    resolve(name: string): ExpressMiddleware {
        return (req, res, next) => {
    
            const originRender = res.render;
            res.render = function (...args) {
                if (args.length > 1 && args[1]) {
                    args[1].session = req.session;
                } else {
                    args[args.length++] = {
                        session: req.session
                    };
                }
        
                return originRender.apply(this, args);
            };
            
            console.log(`[${name}] Request...`); // [ApplicationModule] Request...
            next();
        };
    }
}
