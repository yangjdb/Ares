import { Module } from '../../../../src/decorator/module';
import { HomeController } from './home.controller';

@Module({
    controllers: [HomeController],
})
export class HomesModule { }