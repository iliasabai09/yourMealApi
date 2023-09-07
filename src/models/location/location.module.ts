import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { LocationController } from "./location.controller";
import { Location, LocationSchema } from "./schemas/location.schema";
import { LocationService } from "./services/location.service";

@Module({
  controllers: [LocationController],
  imports: [MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }])],
  providers: [LocationService],
})
export class LocationModule {}
