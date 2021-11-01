import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import Pet from './pet.entity'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/pet')
  findAll(@Query('name') queryName): Pet[] {
    return this.appService.findAll(queryName);
  }

  @Get('/pet/:id')
  findOne(@Param('id') id): Pet | null {
    return this.appService.findOne(parseInt(id, 10));
  }

  @Post('/pet')
  create(@Body() body: Pet): number {
    return this.appService.create(body)
  }

  // 文件上传：https://docs.nestjs.com/techniques/file-upload
  // 'multipart/form-data'
  @Post('/petByFormData')
  createByFormData(@Body() body: Pet): number {
    return this.appService.create(body)
  }
}