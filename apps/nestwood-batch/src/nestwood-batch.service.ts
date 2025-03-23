import { Injectable } from '@nestjs/common';

@Injectable()
export class NestwoodBatchService {
  getHello(): string {
    return 'Welcome to Nestwood BAtch!';
  }
}
