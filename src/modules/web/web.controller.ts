import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('')
export class WebController {
    @Get()
    root(@Res() res, @Req() req) {
        req.session.user = 'testUser';
        res.render('index');
    }
}