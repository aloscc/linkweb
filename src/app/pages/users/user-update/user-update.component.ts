import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {UpdateUserModel} from '../models/update-user.model';
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
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  userId: number;
  objCompare: ObjectCompare;
  updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
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
    this.router.params.subscribe(({id}) => {
      this.userId = id;
      this.usersService.getUser(id).subscribe(({data}) => {
        this.objCompare = new ObjectCompare({...data});
        this.updateForm.patchValue({
          roleId: data.roleId,
          companyId: data.companyId,
          username: data.username,
          password: data.password,
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          photo: data.photo,
          position: data.position,
          bio: data.bio,
        });
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
    const updateUser: Partial<UpdateUserModel> = this.objCompare.getObjectDiference(
      this.updateForm.value,
    );
    this.usersService.udpateUser(this.userId, updateUser).subscribe(data => {});
  }
}
