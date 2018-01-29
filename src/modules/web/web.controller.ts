import { Controller, Get, Res } from '@nestjs/common';

@Controller('')
export class WebController {
    @Get()
    root(@Res() res) {
        res.render('index');
    }
}