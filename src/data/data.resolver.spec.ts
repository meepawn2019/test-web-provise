import { Test, TestingModule } from '@nestjs/testing';
import { DataResolver } from './data.resolver';
import { DataService } from './data.service';

describe('DataResolver', () => {
  let resolver: DataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataResolver, DataService],
    }).compile();

    resolver = module.get<DataResolver>(DataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
