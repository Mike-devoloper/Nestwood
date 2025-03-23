import { Module } from '@nestjs/common';
import { NestwoodBatchController } from './nestwood-batch.controller';
import { NestwoodBatchService } from './nestwood-batch.service';
import {ConfigModule} from "@nestjs/config"
@Module({
  imports: [
    ConfigModule.forRoot()],
  controllers: [NestwoodBatchController],
  providers: [NestwoodBatchService],
})
export class NestwoodBatchModule {}
