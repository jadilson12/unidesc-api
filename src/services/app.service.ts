import { Injectable } from '@nestjs/common';
import { swagger } from 'config';

@Injectable()
export class AppService {
  getApi(): string {
    return `${swagger.DESCRIPTION}, ${swagger.VERSION}`;
  }
}
