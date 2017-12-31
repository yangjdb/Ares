import { Module } from '@nestjs/common'
import { ConfigProvider } from "./config.provider";

@Module({
    imports: [],
    components: [...ConfigProvider],
    exports: [...ConfigProvider]
})
export class ConfigModule {
    constructor() {
        console.log('ConfigModule');
    }
}
