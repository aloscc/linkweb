import {Routes} from '@angular/router';
import {EventComponent} from './event/event.component';
import {EventListComponent} from './event-list/event-list.component';

export const EventsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'event-list',
        component: EventListComponent,
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
];
