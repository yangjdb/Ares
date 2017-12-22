import { Get } from '@nestjs/common';

import { Controller } from '../../../../src/decorator/controller.decorator';

@Controller()
export class HomeController {
    @Get()
    home(): string {
        return 'Hello World!';
    }
}
