import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "../schemas/category.schema";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name)
              private readonly categoryModel: Model<CategoryDocument>) {
  }

  private readonly logger = new Logger();

  async getAllCategories(): Promise<any> {
    try {
      return await this.categoryModel.find().exec();
    } catch (e) {
      this.logger.error(e);
    }
  }
}
