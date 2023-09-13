import { Controller, Get, Req } from '@nestjs/common';
import { LocationService } from './services/location.service';
import { Request } from 'express';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('/getAll')
  getLocations(@Req() request: Request) {
    return this.locationService.getLocations();
  }
}
