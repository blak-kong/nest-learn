import { Controller, Get ,Render} from '@nestjs/common';

import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

    constructor(private newsServices:NewsService){}

    @Get()
    @Render('default/news')
    index(){
        return {
            newsList:this.newsServices.findAll()
        }
    }
}
