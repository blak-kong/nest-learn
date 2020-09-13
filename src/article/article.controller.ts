import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {


    // http://localhost:3000/article

    @Get()
    index(){
        return '我是一个文章页面';
    }

    @Get('add')
    addArticle(){
        return '增加新闻';
    }
    
}
