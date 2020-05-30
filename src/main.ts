import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment, swagger } from 'config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle(swagger.TITLE)
    .setDescription(swagger.DESCRIPTION)
    .setVersion(swagger.VERSION)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swagger.URI, app, document);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(environment.PORT);
}
bootstrap();
