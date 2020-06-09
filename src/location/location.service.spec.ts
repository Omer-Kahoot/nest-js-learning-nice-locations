import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import * as sinon from 'sinon';
import { Location } from './location.entity';
import { GenericFactory } from '../common/generic.factory';
import { MockHelper } from '../common/mock_helper';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository : Repository<Location>;
  let mock: sinon.SinonMock;

  beforeEach(async () => {
    mockRepository = MockHelper.mock<Repository<Location>>({
      find: {
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
      },
    });
    service = new LocationService(mockRepository);
    /*mockRepository = {} as Repository<Location>;
    mockRepository = Object.assign(mockRepository, {
      find: new Function(),
    });

    mock = sinon.mock(mockRepository);
    mock.expects('find').resolves([
      GenericFactory.create<Location>(Location, {
        id: '8533e0c7-d34d-4816-8aa0-248466e6023e',
        name: 'Location 1'
      }),
      GenericFactory.create<Location>(Location, {
        id: '3b3f4582-30c2-40f4-8d1a-cc2fe46e07ea',
        name: 'Location 2'
      }),
    ]);

    service = new LocationService(mockRepository);*/
  });
  /*beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationService],
    }).compile();

    service = module.get<LocationService>(LocationService);
  });*/

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
       {
        id: '8533e0c7-d34d-4816-8aa0-248466e6023e',
        name: 'Location 1'
      },
      {
        id: '3b3f4582-30c2-40f4-8d1a-cc2fe46e07ea',
        name: 'Location 2'
      },
    ]);
  });
});
