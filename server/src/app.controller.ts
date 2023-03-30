import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  UploadedFiles,
  UseFilesHandler,
  FilesType,
} from '@hilma/fileshandler-mongoose';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilesHandler()
  async getUploadedFiles(@UploadedFiles() files: FilesType) {
    return this.appService.saveFiles(files);
  }
}
