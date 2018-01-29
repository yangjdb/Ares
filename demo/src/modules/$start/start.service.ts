import { Component } from '@nestjs/common';

@Component()
export class CommonService {
    constructor() {
        // if (new.target === CommonService) {
        //     throw new Error('本类不能实例化');
        // }
        // this.javahost = CONFIG.hosts.java;
    }

    public genReqOpts(ctx, options) {
        // 头部认证数据
        // let headers = {};
        // headers['user-agent'] = ctx.request.get('user-agent');
        // headers['content-type'] = 'application/json';
        //
        // let body = new SvrRequest(ctx);
        // body.params = options.formData;
        //
        // if (options.channelId) {
        //     body.channelId = options.channelId;
        // } else {
        //     body.channelId = ctx.cookies.get('utm_source') || ctx.cookies.get('channel_mchid');
        // }
        //
        //
        // return {
        //     uri: options.url,
        //     baseUrl: options.svrUrl(this.name),
        //     method: 'POST',
        //     body: body,
        //     headers: headers,
        //     json: true
        // };
    }

    public requestWrapper(reqOpts) {
        // let token = reqOpts.body.token;
        // let url = reqOpts.baseUrl + reqOpts.uri;
        //
        // if (token) {
        //     let jar = rp.jar();
        //     let cookieToken = rp.cookie(`${SESSION.SESSION_TOKEN}=${token}`);
        //     jar.setCookie(cookieToken, url, (err, cookies) => {
        //         if (err) {
        //             console.error("【cookie异常】：" + err + "\n【token】:" + token);
        //         }
        //     });
        //     reqOpts.jar = jar;
        // }
        //
        // reqOpts.resolveWithFullResponse = true;
        //
        // return rp(reqOpts).then(response => {
        //
        //     if (response.body && typeof response.body.code === 'number' && response.body.code !== 0) {
        //         console.error('【模块错误】:' + response.body.message + '\n【参数】:' + JSON.stringify(reqOpts) + '\n 【正文】:' + JSON.stringify(response));
        //     } else {
        //         if (process.env.NODE_ENV != 'production') {
        //             console.log('【请求参数】:' + JSON.stringify(reqOpts) + '\n 【正文】:' + JSON.stringify(response));
        //         }
        //     }
        //
        //     return response;
        // }).catch(err =>{
        //     console.error('【请求异常】:' + JSON.stringify(err));
        //     return null;
        // });
    }

    public invokeRequest(ctx, reqOpts) {
        // return (async () => {
        //     let response = await this.requestWrapper(reqOpts);
        //     //let response = response.toJSON();
        //     let res = new SvrResponse();
        //     if (response && response.statusCode === 200) {
        //         res.code = response.body.code;
        //         // res.display = response.body.display;
        //         res.message = response.body.display;
        //         res.content = response.body.content;
        //         res.status = res.code === 0 ? 'success' : 'error';
        //         // 用户未登陆，清空session
        //         if (response.body && response.body.code === 100005) {
        //             delete ctx.session.userInfo;
        //             delete ctx.session.token;
        //         }
        //     } else {
        //         res.code = -1;
        //         res.status = 500;
        //         res.display = '微服务返回异常';
        //         console.error('【微服务返回异常】:\n 【参数】:' + JSON.stringify(reqOpts) + '\n 【正文】:' + JSON.stringify(response));
        //     }
        //
        //     return res;
        // })();
    }

    public handleRequest(ctx, options) {
        // let reqOpts = this.genReqOpts(ctx, options);
        // return this.invokeRequest(ctx, reqOpts);
    }

    public oldHandleRequest(url, ctx, type = 'POST') {
        // return (async () => {
        //     let reqOpts = {
        //         baseUrl: this.javahost,
        //         uri: url,
        //         form: ctx.request.body || null,
        //         json: true,
        //         method: type,
        //         body: {
        //             token: ctx.session.token
        //         }
        //     };
        //     let res = await this.requestWrapper(reqOpts);
        //     if (res && res.statusCode === 200) {
        //         return res.body || null;
        //     }
        //     console.error('【旧官网接口返回异常】:\n 【参数】:' + JSON.stringify(reqOpts) + '\n 【正文】:' + JSON.stringify(res));
        //     return null;
        // })();
    }
}