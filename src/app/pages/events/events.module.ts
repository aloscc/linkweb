import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EventUpdateComponent} from './event-update/event-update.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventsRoutes} from './events.routing';
import {EventCreateComponent} from './event-create/event-create.component';
import {MaterialModule} from '../../app.module';

@NgModule({
  declarations: [
    EventUpdateComponent,
    EventListComponent,
    EventCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EventsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class EventsModule {}
