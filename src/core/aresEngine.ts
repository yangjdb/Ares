import {AresInterface} from '../interface/aresInterface'
import * as http from 'http'

export class AresEngine implements AresInterface {
    
    private struct: any;
    private httpServer: http.Server;
    
    constructor(struct: any){
        this.struct = struct;
        this.httpServer = http.createServer()
    }
    
    listen(port: number, callback?: () => { void }): Promise<any> {
        return null;
    }
    
    listenSync(port: number): Promise<any> {
        return null;
    }
}
