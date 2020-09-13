import { Controller, Get, Post, Body,Response, Render} from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    @Render('default/user')
    index(){
       return {"name":"张三"};
    }
    @Post('doAdd')
    doAdd(@Body() body,@Response() res){

        console.log(body);

        res.redirect('/user');  //路由跳转        

    }
    
}
