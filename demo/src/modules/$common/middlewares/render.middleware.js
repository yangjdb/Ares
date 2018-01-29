import { Middleware } from "@nestjs/common";

@Middleware()
export class RenderMiddleware {
    resolve(...args) {
        return (req, res, next) => {
            let originRender = res.render;

            res.render = function() {
                if (arguments[1]) {
                    arguments[1].session = this.session;
                    arguments[1].yyexchDomain = CONFIG.domains.yyexch;
                    arguments[1].yyfaxp2pDomain = CONFIG.domains.yyfaxp2p;
                    arguments[1].yyfaxgroupDomain = CONFIG.domains.yyfaxgroup;
                } else {
                    arguments[arguments.length++] = {
                        "session": this.session,
                        "yyexchDomain": CONFIG.domains.yyexch,
                        "yyfaxp2pDomain": CONFIG.domains.yyfaxp2p,
                        "yyfaxgroupDomain": CONFIG.domains.yyfaxgroup,
                    };
                }

                originRender.apply(this, arguments);
            };

            next();

            console.log("中间件:pug渲染...[OK]");
        };
    }
}
