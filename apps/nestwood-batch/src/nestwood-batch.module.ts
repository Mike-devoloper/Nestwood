import { Module } from '@nestjs/common';
import { NestwoodBatchController } from './nestwood-batch.controller';
import { NestwoodBatchService } from './nestwood-batch.service';

@Module({
  imports: [],
  controllers: [NestwoodBatchController],
  providers: [NestwoodBatchService],
})
export class NestwoodBatchModule {}
