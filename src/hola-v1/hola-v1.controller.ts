import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'hola',
  version: '1',
})
export class HolaV1Controller {
  @Get()
  getHola() {
    return 'Hola Mundo V1!';
  }
}
