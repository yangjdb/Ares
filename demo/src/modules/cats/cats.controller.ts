import { Body, Controller, Get, Param, Post, } from '@nestjs/common';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
// @UseGuards(RolesGuard)
// @UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }
    
    @Post()
    // @Roles('admin')
    public async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }
    
    @Get()
    public async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
    
    @Get('findOne/:id')
    public findOne(@Param('id', new ParseIntPipe())
                id, ) {
        // logic
    }
    
    @Get('test')
    public test() {
        return 'ok';
    }
}
