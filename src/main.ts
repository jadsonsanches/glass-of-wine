import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prefixUrl = 'glass-of-wine';
  app.setGlobalPrefix(prefixUrl);

  const documentBuilder = new DocumentBuilder()
    .setTitle(prefixUrl)
    .setDescription('Glass of wine API')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  document['x-wso2-disable-security'] = true;
  SwaggerModule.setup(`${prefixUrl}/swagger`, app, document);

  await app.listen(process.env.API_PORT || 8082);
}
bootstrap();
