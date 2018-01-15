import { Component, Inject } from '@nestjs/common';
import { CommonService } from '../common/common.service';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Component()
export class CatsService {
    constructor(
        @Inject('CatsRepository') private readonly catsRepository: typeof Cat,
        private readonly commonService: CommonService
    ) {
    }
    
    public async test() {
        console.log('test');
    }
    
    public async create(createCatDto: CreateCatDto): Promise<Cat> {
        const cat = new Cat();
        cat.name = createCatDto.name;
        cat.breed = createCatDto.breed;
        cat.age = createCatDto.age;
        
        return await this.catsRepository.create(cat);
        
        // return await cat.save();
    }
    
    public async findAll(): Promise<Cat[]> {
        return await this.catsRepository.findAll<Cat>();
    }
}
