import {Component, OnInit} from '@angular/core';
import {AccessoriesService} from '../accessories.service';
import {CreateAccessory} from '../models/create-accessory';
import {ObjectCompare} from '../../../core/helpers/object-compare';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-accessory-create',
  templateUrl: './accessory-create.component.html',
})
export class AccessoryCreateComponent implements OnInit {
  accessory = new CreateAccessory();
  objCompare: ObjectCompare;
  register: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accessoriesService: AccessoriesService,
  ) {}

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      accessoryTypeId: [null],
      name: [''],
      imageUrl: [''],
      assetBundleUrl: [''],
      genre: [null],
    });
  }

  onSubmit() {
    this.accessoriesService
      .createAccessory(this.register.value)
      .subscribe(data => {});
  }
}
