import { NestFactory } from '@nestjs/core';
import { nestAppConfig } from './app.config';
import { AppModule } from './app.module';
import { nestSwaggerConfig } from './app.swgger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  // Nest application setting
  nestAppConfig(app);

  // Nest application document setting
  nestSwaggerConfig(app, {
    title: 'Hoplin-Nest-Template',
    description: 'Template codes for Nest.js',
    contact: {
      maintainer: 'J-Hoplin',
      url: 'https://github.com/J-Hoplin',
      email: 'hoplin.dev@gmail.com',
    },
  });

  await app.listen(3000);
}
bootstrap();
