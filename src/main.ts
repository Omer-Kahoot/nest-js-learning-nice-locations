import { NestFactory, NestContainer } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const APP_DIRECTORY = resolve(__dirname, '..');  

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  
  const config = app.get(ConfigService);
  const viewsDirectory = config.get<string>('templates.path');
  const publicDirectory = config.get<string>('public.path');

  app.setBaseViewsDir(viewsDirectory);
  app.useStaticAssets(publicDirectory);
  await app.listen(3000);
}
bootstrap();
