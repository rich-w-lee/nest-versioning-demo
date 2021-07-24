import { Controller, Get, Version } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Version('1')
  @Get()
  getHelloV1() {
    return 'Hello World V1!';
  }

  @Version('2')
  @Get()
  getHelloV2() {
    return 'Hello World V2!';
  }
}
