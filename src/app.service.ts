import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
//     let xx = 10;
//     xx = 20;

// var yy = 20;
// var yy = 30;
// yy = 40;

// console.log(xx);
// console.log(yy);