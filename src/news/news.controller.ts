import { Controller,Get, Param,Query } from '@nestjs/common';

@Controller('news')
export class NewsController {

    //http://localhost:3000/news/adda
    @Get('a*a')
    indexA(){
        // Query.id
        
        return '新闻增加 模糊匹配';
    }

    @Get('add')
    addData(@Query('id') id){
        // Query.id
        console.log(id)
        return '新闻增加';
    }

    //获取动态路由   http://localhost:3000/news/123       http://localhost:3000/news/xxxxx
    @Get(":id")
    index(@Param() param){
        console.log(param);

        return '这是新闻页面';
    }


}
