import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Location, LocationDocument } from '../schemas/location.schema';
import { Model } from 'mongoose';
import { getLocationsInclude } from '../include-fields/get-locations.include';

@Injectable()
export class LocationService {
  private readonly logger: Logger = new Logger();

  constructor(
    @InjectModel(Location.name)
    private readonly locationModel: Model<LocationDocument>,
  ) {}

  async getLocations(): Promise<any> {
    try {
      return await this.locationModel.find({}, getLocationsInclude);
    } catch (e) {
      this.logger.log(e);
    }
  }
}
