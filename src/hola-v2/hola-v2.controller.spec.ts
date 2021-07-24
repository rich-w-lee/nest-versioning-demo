import { Test, TestingModule } from '@nestjs/testing';
import { HolaV2Controller } from './hola-v2.controller';

describe('HolaV2Controller', () => {
  let controller: HolaV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HolaV2Controller],
    }).compile();

    controller = module.get<HolaV2Controller>(HolaV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
