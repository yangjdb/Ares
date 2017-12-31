import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';

@Module({
    modules: [],
    controllers: [CatsController],
    components: [CatsService, ...catsProviders],
})
export class CatsModule {
}
