import { Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';

@Module({
    controllers: [CatsController],
    components: [CatsService],
})
export class CatsModule {
    constructor(private readonly catsService: CatsService) {}
}