import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../app.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import {OutPagesRoutes} from './out-pages.routing';

import {RegisterComponent} from './register/register.component';
import {PricingComponent} from './pricing/pricing.component';
import {LockComponent} from './lock/lock.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OutPagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    LockComponent,
  ],
})
export class OutPagesModule {}
