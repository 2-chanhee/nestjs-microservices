import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserRequest } from './create_user_request.tdo';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post()
    createUser(@Body() createUserRequest: CreateUserRequest) {
        this.appService.createUser(createUserRequest);
    }
}
