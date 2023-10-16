import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';

interface PostDto {
  type: number;
  string: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 private reqdata:any=[];
 


  @Post()
  create(@Body()postDto:PostDto) {
    const uniqueID  = uuidv4();;
    let tempobj = {
      id:uniqueID,
      ...postDto
    };
    this.reqdata.push(tempobj)
    return this.appService.postData(this.reqdata);
  }
  @Get()
  getAll(): Array<PostDto> {
    return this.appService.getAll(this.reqdata);
  }

  @Get(':id')
  getById(@Param('id') id: string): Array<PostDto> {
    return this.appService.getById(this.reqdata,id);
  }
}

