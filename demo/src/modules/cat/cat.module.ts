import { Module } from '../../../../src/decorator/module';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';

@Module({
    controllers: [CatsController],
    services: [CatsService],
})
export class CatsModule {}