import { Global, Module } from '@nestjs/common'
import { CommonService } from "./common.service";

@Global()
@Module({
    imports: [],
    components: [CommonService],
    exports: [CommonService]
})
export class CommonModule {
    constructor() {
    }
}
