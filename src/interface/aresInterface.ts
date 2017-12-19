

export interface AresInterface {
    
    listen(port: number, callback?: ()=>{void}): Promise<any>;
    // listenSync(port: number): Promise<any>;
    
}