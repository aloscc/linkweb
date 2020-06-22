import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EventComponent} from './event/event.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventsRoutes} from './events.routing';

@NgModule({
  declarations: [EventComponent, EventListComponent],
  imports: [CommonModule, RouterModule.forChild(EventsRoutes), FormsModule],
})
export class EventsModule {}
