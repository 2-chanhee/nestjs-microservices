import { Injectable } from '@nestjs/common';

import { CreateUserEvent } from './create_user_event';

@Injectable()
export class AppService {
    private readonly analytics: any[] = [];

    handleUserCreated(data: CreateUserEvent) {
        console.log('handleUserCreated - ANALYTICS', data);

        this.analytics.push({
            email: data.email,
            timestamp: new Date()
        });
    }

    getAnalytics() {
        return this.analytics;
    }
}
