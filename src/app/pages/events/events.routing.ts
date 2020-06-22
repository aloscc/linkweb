import {Routes} from '@angular/router';
import {EventComponent} from './event/event.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventCreateComponent} from "./event-create/event-create.component";

export const EventsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'event',
                component: EventCreateComponent,
            },
        ],
    },
    {
        path: '',
        children: [
            {
                path: 'event-create',
                component: EventComponent,
            },
        ],
    },
    {
        path: '',
        children: [
            {
                path: 'event-list',
                component: EventListComponent
            }
        ]
    }
];
