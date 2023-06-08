import { Test, TestingModule } from '@nestjs/testing';
import { DtsClientesController } from './dts-clientes.controller';

describe('DtsClientesController', () => {
  let controller: DtsClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtsClientesController],
    }).compile();

    controller = module.get<DtsClientesController>(DtsClientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
