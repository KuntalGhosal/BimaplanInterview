import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Kuntal';
  }
  postData(data:any):any {
    return data
  }
  getAll(array:any): any {
    return array ;
  }

  getById(array:any,id:any): any {
    return array.filter((item:any)=>item?.id===id) ;
  }
}
 