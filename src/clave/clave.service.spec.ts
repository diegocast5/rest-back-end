import { Test, TestingModule } from '@nestjs/testing';
import { ClaveService } from './clave.service';

describe('ClaveService', () => {
  let service: ClaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaveService],
    }).compile();

    service = module.get<ClaveService>(ClaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
