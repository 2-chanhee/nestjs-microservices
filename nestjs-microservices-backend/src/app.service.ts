import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateUserEvent } from './create_user_event';
import { CreateUserRequest } from './create_user_request.tdo';

@Injectable()
export class AppService {
    private readonly users: any[] = [];

    constructor(
        @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
        @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy
    ) {}

    createUser(createUserRequest: CreateUserRequest) {
        this.users.push(createUserRequest);

        this.communicationClient.emit('user_created', new CreateUserEvent(createUserRequest.email));

        this.analyticsClient.emit('user_created', new CreateUserEvent(createUserRequest.email));
    }

    getAnalytics() {
        return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
    }
}
