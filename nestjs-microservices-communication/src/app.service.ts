import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create_user_event';

@Injectable()
export class AppService {
    handleUserCreated(data: CreateUserEvent) {
        console.log('handleUserCreated - COMMUNICATION', data);

        // @Todo
        // email the user..
    }
}
