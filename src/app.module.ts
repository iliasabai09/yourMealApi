import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';
import { LocationModule } from './models/location/location.module';

@Module({
  imports: [MongooseModule.forRoot(environment.mongoDb), LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
