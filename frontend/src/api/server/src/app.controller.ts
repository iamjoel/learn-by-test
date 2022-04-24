import { Controller, Get, Param, Query, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { FormDataRequest } from 'nestjs-form-data'
import { Express } from 'express'
import { AppService } from './app.service';
import Pet from './pet.entity'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/pet')
  findAll(@Query('name') queryName: string): Pet[] {
    return this.appService.findAll(queryName);
  }

  @Get('/pet/:id')
  findOne(@Param('id') id: string): Pet | null {
    return this.appService.findOne(parseInt(id, 10));
  }

  @Post('/pet')
  create(@Body() body: Pet): number {
    return this.appService.create(body)
  }

  // 'multipart/form-data'
  @Post('/pet/byFormData')
  @FormDataRequest()
  createByFormData(@Body() body: Pet): number {
    console.log(body)
    return this.appService.create(body)
  }

  // 文件上传：https://docs.nestjs.com/techniques/file-upload
  @Post('/pet/upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile() file: Express.Multer.File): string{
    console.log(file);
    return 'success'
  }
}