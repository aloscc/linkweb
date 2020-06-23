import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {UpdateEventModel} from '../models/update-event.model';
import {ObjectCompare} from '../../../core/helpers/object-compare';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from '@angular/forms';
import {FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event-update.component.html',
})
export class EventUpdateComponent implements OnInit {
  eventId: number;
  objCompare: ObjectCompare;
  updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
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
    this.router.params.subscribe(({id}) => {
      this.eventId = id;
      this.eventsService.getEvent(id).subscribe(({data}) => {
        this.objCompare = new ObjectCompare({...data});
        this.updateForm.patchValue({...data});
      });
    });
  }

  onFileChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.updateForm.controls['photo'].setValue(file, {
      emitModelToViewChange: false,
    });
  }

  deletePhoto() {
    this.updateForm.controls['photo'].setValue(null, {
      emitModelToViewChange: false,
    });
  }

  onSubmit() {
    const updateEvent: Partial<UpdateEventModel> = this.objCompare.getObjectDiference(
      this.updateForm.value,
    );

    this.eventsService
      .updateEvent(this.eventId, updateEvent)
      .subscribe(data => {});
  }
}
