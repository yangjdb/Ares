import {Ares} from '../../src/core/ares';
import { ApplicationModule } from './modules/app.module';

async function createAres() {
    const app = new Ares(ApplicationModule);
    await app.listen(3000);
}
createAres();
