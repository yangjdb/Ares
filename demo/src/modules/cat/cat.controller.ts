import { Get, Res, Post, Param, Body } from '@nestjs/common';

import { Controller } from '../../../../src/decorator/controller';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cat.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create( @Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}