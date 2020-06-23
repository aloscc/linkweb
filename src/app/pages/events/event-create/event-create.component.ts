import {Component, OnInit} from '@angular/core';
import {ObjectCompare} from '../../../core/helpers/object-compare';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CreateEventModel} from '../models';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
})
export class EventCreateComponent implements OnInit {
  event = new CreateEventModel();
  objCompare: ObjectCompare;
  register: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
  ) {}

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      eventTypeId: [null],
      worldId: [null],
      name: [''],
      shortDescription: [''],
      longDescription: [''],
      visibility: [''],
      startDate: [''],
      endDate: [''],
      organizerUrl: [''],
      capacity: [null],
    });
  }

  onSubmit() {
    this.eventsService.createEvent(this.register.value).subscribe(data => {});
  }
}
