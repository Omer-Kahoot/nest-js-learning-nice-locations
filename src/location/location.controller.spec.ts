import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { MockHelper } from '../common/mock_helper';
import { GenericFactory } from '../common/generic.factory';
import { LocationMappingService } from './location-mapping.service';
import { Location } from './location.entity';

describe('LocationController', () => {
  let locationController: LocationController;
  let mockLocationService : LocationService;
  let mappingRegistryService : MappingRegistryService

  beforeEach(async () => {
    /*const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [LocationService],
    }).compile();

    locationController = app.get<LocationController>(LocationController);*/

    mockLocationService = MockHelper.mock<LocationService>({
      list: {
        resolves : [
          GenericFactory.create<Location>(Location, {
            id: '8533e0c7-d34d-4816-8aa0-248466e6023e',
            name: 'Location 1'
          }),
          GenericFactory.create<Location>(Location, {
            id: '3b3f4582-30c2-40f4-8d1a-cc2fe46e07ea',
            name: 'Location 2'
          }),
        ]
      }
    });

    mappingRegistryService = new MappingRegistryService();
    const locationMappingService = new LocationMappingService(mappingRegistryService);
    locationController = new LocationController(mockLocationService, mappingRegistryService);
  });

  describe('root', () => {
    it('should return "Hello world"', () => {
      expect(locationController.getHello()).toBe('Hello World!');
    });

    it('should return an array of locations', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: [
          {
            id: '8533e0c7-d34d-4816-8aa0-248466e6023e',
            name: 'Location 1'
          },
          {
            id: '3b3f4582-30c2-40f4-8d1a-cc2fe46e07ea',
            name: 'Location 2'
          },
        ],
      });
    });
  });
});
