import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {CreateUserDto} from '../dto/create-user.dto';
import {ObjectCompare} from '../../../core/helpers/object-compare';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from '@angular/forms';
import {FormBuilder, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-user-cmp',
  templateUrl: 'user-create.component.html',
})
export class UserCreateComponent implements OnInit {
  user = new CreateUserDto();
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
