import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity'

@Injectable()
export class LocationService {

    constructor(
     @InjectRepository(Location)
        private readonly locationReposity : Repository<Location>,
    ){} 

    //public list(): string[] {
    public async list(): Promise<Location[]> {
        /*return [
            'Location 1',
            'Location 2',
            'Location 3',
        ]*/
        return this.locationReposity.find();
    }

}
