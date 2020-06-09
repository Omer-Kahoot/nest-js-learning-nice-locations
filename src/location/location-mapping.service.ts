import { MappingService } from "../common/mapping.service";
import { LocationDto } from "./location.dto";
import { Injectable } from "@nestjs/common";
import { Location }  from "./location.entity"

@Injectable()
export class LocationMappingService extends MappingService {
    public addMapping(): void {
        automapper.map(Location.name, LocationDto.name);
    }    
}