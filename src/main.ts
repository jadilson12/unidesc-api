import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment, swagger } from 'config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  await app.listen(environment.PORT);
}
bootstrap();
