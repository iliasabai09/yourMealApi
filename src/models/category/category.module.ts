import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from "./services/category.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "./schemas/category.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
