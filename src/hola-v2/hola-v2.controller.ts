import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'hola',
  version: '2',
})
export class HolaV2Controller {
  @Get()
  getHola() {
    return 'Hola Mundo V2!';
  }
}
