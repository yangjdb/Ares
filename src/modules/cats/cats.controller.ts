import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
// import { Roles } from '../common/decorators/roles.decorator';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';

@Controller('cats')
// @UseGuards(RolesGuard)
// @UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
    constructor(
        private readonly catsService: CatsService
    ) {
    }
    
    @Post()
    // @Roles('admin')
    async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }
    
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
    
    @Get(':id')
    findOne(
        @Param('id', new ParseIntPipe()) id,
    ) {
        // logic
    }
    
    @Get('test')
    test() {
        console.log('test');
        // await this.catsService.test();
        // res.statusCode(200).send('ok');
        return 'ok'
    }
}
