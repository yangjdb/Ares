import { Service } from '../../../../src/decorator/service';
import { Cat } from './interface/cat.interface';

@Service()
export class CatsService {
    private readonly cats: Cat[] = [{ name: 'tc', age: 10 }];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}