import { Get } from '@nestjs/common';

import { Controller } from '../../../../src/decorator/controller';

@Controller()
export class HomeController {
    @Get()
    home(): string {
        return 'Hello World!';
    }
}
