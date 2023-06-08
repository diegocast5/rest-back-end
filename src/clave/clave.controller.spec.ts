import { Test, TestingModule } from '@nestjs/testing';
import { ClaveController } from './clave.controller';

describe('ClaveController', () => {
  let controller: ClaveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClaveController],
    }).compile();

    controller = module.get<ClaveController>(ClaveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
