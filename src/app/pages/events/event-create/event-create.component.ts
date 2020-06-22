import {Component, OnInit} from '@angular/core';
import {ObjectCompare} from "../../../core/helpers/object-compare";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CreateEvent} from "../models";
import {EventsService} from "../services/events.service";

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html',
    styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

    event = new CreateEvent();
    objCompare: ObjectCompare;
    register: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private eventsService: EventsService,
    ) {
    }

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
            capacity: [''],
        });
    }

    onSubmit() {
        this.eventsService.createEvent(this.register.value).subscribe(data => {
        });
    }

}
