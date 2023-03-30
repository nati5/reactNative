import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesHandlerModule } from '@hilma/fileshandler-mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/photos'),
    FilesHandlerModule.register({
      folder: '../../files',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
