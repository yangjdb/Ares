import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import {Roles} from '../common/decorators/roles.decorator';
import {RolesGuard} from '../common/guards/roles.guard';
import {LoggingInterceptor} from '../common/interceptors/logging.interceptor';
import {TransformInterceptor} from '../common/interceptors/transform.interceptor';
import {ParseIntPipe} from '../common/pipes/parse-int.pipe';
import {Cat} from './cat.entity';
import {CatsService} from './cats.service';
import {CreateCatDto} from './dto/create-cat.dto';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }
    
    @Post()
    @Roles('admin')
    public async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }
    
    @Get()
    public async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
    
    @Get(':id')
    public findOne(@Param('id', new ParseIntPipe())
                id, ) {
        // logic
    }
}
