import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // podemos adicionar esse prefixo para que seja o padrão de todas as rotas
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
