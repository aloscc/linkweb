import {Routes} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventCreateComponent} from "./event-create/event-create.component";

export const EventsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'event-create',
                component: EventCreateComponent,
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
