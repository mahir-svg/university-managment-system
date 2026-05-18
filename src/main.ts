import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD

  app.enableCors({
    origin: "http://localhost:3001",
  });

  await app.listen(3000);
}
bootstrap();
=======
   app.enableCors({origin: 'http://localhost:3001', });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
>>>>>>> 75ce4653ccd959a16b7c707ec95c1e757b59f483
