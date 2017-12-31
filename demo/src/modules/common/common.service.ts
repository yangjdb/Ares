import { Component, Inject } from "@nestjs/common";

@Component()
export class CommonService {
    constructor(
        @Inject('customToken')
        private readonly str
    ) {
        
        console.log("CommonService")
    }
    
    commonTest() {
        console.log('commonTest');
    }
}