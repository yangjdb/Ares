import { Component, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';
import { CommonService } from "../common/common.service";

@Component()
export class CatsService {
    constructor(
        @Inject('CatsRepository') private readonly catsRepository: typeof Cat,
        private readonly commonService: CommonService
    ) {
    }
    
    async test() {
        console.log('test');
    }
    
    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const cat = new Cat();
        cat.name = createCatDto.name;
        cat.breed = createCatDto.breed;
        cat.age = createCatDto.age;
        
        return await this.catsRepository.create(cat);
        
        // return await cat.save();
    }
    
    async findAll(): Promise<Cat[]> {
        return await this.catsRepository.findAll<Cat>();
    }
}
