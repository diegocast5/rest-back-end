import { Test, TestingModule } from '@nestjs/testing';
import { DtsClientesService } from './dts-clientes.service';

describe('DtsClientesService', () => {
  let service: DtsClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtsClientesService],
    }).compile();

    service = module.get<DtsClientesService>(DtsClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
