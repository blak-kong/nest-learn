import { Controller, Get, Query,Request, Post,Body } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    index(){
        return "用户中心";
    }
    

    // 通过@Query装饰器获取get传值  http://localhost:3000/user/add?id=123&name=zhangsan
    @Get('add')
    addData(@Query() query){

        console.log(query)
        return query;
    }

    // 通过Request装饰器获取get传值
    @Get('edit')
    editData(@Request() req){
        console.log(req.query)
        return '通过Request获取get传值';
    }

    //通过@Body()装饰器获取post传值
    @Post('create')
    create(@Body() body){
        console.log('触发了post');
        console.log(body);
        return '我是post方法';     
    }

}
