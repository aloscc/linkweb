import {Routes} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventCreateComponent} from './event-create/event-create.component';
import {EventUpdateComponent} from './event-update/event-update.component';

export const EventsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'event/:id',
        component: EventUpdateComponent,
      },
    ],
  },
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
        component: EventListComponent,
      },
    ],
  },
];
