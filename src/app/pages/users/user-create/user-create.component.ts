import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CreateUserModel} from '../models/create-user.model';
import {ObjectCompare} from '../../../core/helpers/object-compare';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-cmp',
  templateUrl: 'user-create.component.html',
})
export class UserCreateComponent implements OnInit {
  user = new CreateUserModel();
  objCompare: ObjectCompare;
  register: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      roleId: [null],
      companyId: [null],
      username: [''],
      password: [''],
      name: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      photo: [null],
      position: [''],
      bio: [''],
    });
  }

  onFileChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.register.controls['photo'].setValue(file, {
      emitModelToViewChange: false,
    });
  }

  deletePhoto() {
    this.register.controls['photo'].setValue(null, {
      emitModelToViewChange: false,
    });
  }

  onSubmit() {
    this.usersService.createUser(this.register.value).subscribe(data => {});
  }
}
