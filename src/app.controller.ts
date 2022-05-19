import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class UsersController {
  @Get()
  getAllUsers(): string[] {
    return ['h', 'e', 'l', 'l', 'o'];
  }
}
