import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationListDto } from './location-list.dto';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { LocationDto } from './location.dto';

@Controller()
export class LocationController {  
  constructor(
    private readonly locationService : LocationService, 
    private readonly mappingRegistryService : MappingRegistryService,    
     ) {

  }

  @Get('hello')
  getHello(): string {
    return "Hello World!";
  }

  @Get()
  @Render('list.hbs')
  public async listLocations(): Promise<LocationListDto> {
  
    const locations = await this.locationService.list();
    const dtos = locations.map(location =>  this.mappingRegistryService.map<LocationDto>(Location.name, LocationDto.name, location));    
    return { locations : dtos };
  }

}
