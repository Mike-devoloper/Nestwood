import { Controller, Get } from '@nestjs/common';
import { NestwoodBatchService } from './nestwood-batch.service';

@Controller()
export class NestwoodBatchController {
  constructor(private readonly nestwoodBatchService: NestwoodBatchService) {}

  @Get()
  getHello(): string {
    return this.nestwoodBatchService.getHello();
  }
}
