import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { catsProviders } from './cats.providers';
import { CatsService } from './cats.service';

@Module({
    modules: [],
    controllers: [CatsController],
    components: [CatsService, ...catsProviders],
})
export class CatsModule {
}
