import {Component, OnInit} from '@angular/core';
import {AccessoriesService} from '../accessories.service';
import {UpdateAccessory} from '../models/update-accessory';
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
  selector: 'app-accessory-update',
  templateUrl: './accessory-update.component.html',
})
export class AccessoryUpdateComponent implements OnInit {
  accessoryId: number;
  objCompare: ObjectCompare;
  updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accessoriesService: AccessoriesService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      accessoryTypeId: [null],
      name: [''],
      imageUrl: [''],
      assetBundleUrl: [''],
      genre: [null],
    });
    this.router.params.subscribe(({id}) => {
      this.accessoryId = id;
      this.accessoriesService.getAccessory(id).subscribe(({data}) => {
        this.objCompare = new ObjectCompare({...data});
        this.updateForm.patchValue({...data});
      });
    });
  }

  onSubmit() {
    const updateAccessory: Partial<UpdateAccessory> = this.objCompare.getObjectDiference(
      this.updateForm.value,
    );

    this.accessoriesService
      .updateAccessory(this.accessoryId, updateAccessory)
      .subscribe(data => {});
  }
}
