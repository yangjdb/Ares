import { Module } from '../../../src/decorator/module';

import { CatsModule } from './cat/cat.module';
import { HomesModule } from './home/home.module'

@Module({
    modules: [HomesModule, CatsModule],
})
export class ApplicationModule { }
