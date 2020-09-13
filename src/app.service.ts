import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '你好nestjs  2222';
  }
  getProduct():string{

    return '商品服务';
  }
}
