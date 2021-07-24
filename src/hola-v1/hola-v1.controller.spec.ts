import { Test, TestingModule } from '@nestjs/testing';
import { HolaV1Controller } from './hola-v1.controller';

describe('HolaV1Controller', () => {
  let controller: HolaV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HolaV1Controller],
    }).compile();

    controller = module.get<HolaV1Controller>(HolaV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
