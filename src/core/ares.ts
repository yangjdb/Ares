import * as http from 'http'
import * as Koa from 'koa'
import {AresInterface} from '../interface/aresInterface'
import {Module} from './module'
import {Container} from './container'

export class Ares implements AresInterface {
    private readonly app = new Koa();
    private readonly httpServer: http.Server = null;
    private readonly module = new Module();
    private readonly container = new Container();
    private inited = false;

    constructor(module) {
        // this.scanModule(module);
        this.httpServer = http.createServer(this.app.callback());
    }

    private async init() {
        await this.addModules();
    }

    private async addModules() {
        await this.module.init(this.container);
    }

    public async listen(...args): Promise<any> {
        !this.inited &&
        this.httpServer.listen(...args);
        return this.httpServer;
    }

    public async registMiddleware() {
    }
}
