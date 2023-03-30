import { ImageMongooseService, FilesType } from '@hilma/fileshandler-mongoose';
import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class AppService {
  constructor(private readonly ImageServiceMongo: ImageMongooseService) {}

  async saveFiles(file: FilesType) {
    const userIds = ["60906a13f196d641f88ba1d2", "60906a13f196d641f88ba1d3"];
    const objectIdUserIds = userIds.map(userId => new Types.ObjectId(userId));
    return this.ImageServiceMongo.saveSingleFileWithUsersPermission(file,objectIdUserIds);
  }
}
