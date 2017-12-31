import { Global, Module } from '@nestjs/common'
import { CommonService } from "./common.service";
import { DatabaseModule } from "../database/database.module";

@Global()
@Module({
    imports: [DatabaseModule],
    components: [CommonService],
    exports: [CommonService]
})
export class CommonModule {
    constructor() {
        console.log('CommonModule')
    }
}
