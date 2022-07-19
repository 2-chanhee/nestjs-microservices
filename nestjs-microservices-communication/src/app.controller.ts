import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CreateUserEvent } from './create_user_event';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @EventPattern('user_created')
    handleUserCreated(data: CreateUserEvent) {
        this.appService.handleUserCreated(data);
    }
}
