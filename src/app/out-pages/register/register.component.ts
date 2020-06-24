import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {SignupModel} from '../../core/models/signup.model';
import {ObjectCompare} from '../../core/helpers/object-compare';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-cmp',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  user = new SignupModel();
  objCompare: ObjectCompare;
  register: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');
    this.register = this.formBuilder.group({
      roleId: [1],
      companyId: [1],
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

  onSubmit() {
    this.authService.register(this.register.value).subscribe(data => {
        this.router.navigate(['/login']);
    });
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
  }
}
