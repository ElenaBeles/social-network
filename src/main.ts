import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  app.enableCors({
    origin: [/^(.*)/],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization', 'X-Forwarded-for'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(new ValidationPipe());

  const documentationConfig = new DocumentBuilder()
      .setTitle('Social Network')
      .setDescription('The Social Network API description')
      .setVersion('0.1')
      .build();

  const document = SwaggerModule.createDocument(app, documentationConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port || 3000);
}
bootstrap();
