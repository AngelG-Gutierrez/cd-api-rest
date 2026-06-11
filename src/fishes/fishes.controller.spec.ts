import { Test, TestingModule } from '@nestjs/testing';
import { FishesController } from './fishes.controller';

describe('FishesController', () => {
  let controller: FishesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FishesController],
    }).compile();

    controller = module.get<FishesController>(FishesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
