import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';
import { LocationModule } from './models/location/location.module';
import { ProductModule } from './models/product/product.module';
import { CartModule } from './models/cart/cart.module';
import { CategoryModule } from "./models/category/category.module";

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoDb),
    LocationModule,
    ProductModule,
    CartModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
