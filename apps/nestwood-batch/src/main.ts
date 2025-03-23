import { NestFactory } from '@nestjs/core';
import { NestwoodBatchModule } from './nestwood-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(NestwoodBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
