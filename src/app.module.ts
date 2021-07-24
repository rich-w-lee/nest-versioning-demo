import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HolaV1Controller } from './hola-v1/hola-v1.controller';
import { HolaV2Controller } from './hola-v2/hola-v2.controller';
import { HealthController } from './health/health.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, HolaV1Controller, HolaV2Controller, HealthController],
  providers: [AppService],
})
export class AppModule {}
