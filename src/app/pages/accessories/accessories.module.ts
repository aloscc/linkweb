import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AccessoriesRoutingModule} from './accessories-routing.module';
import {AccessoryListComponent} from './accessory-list/accessory-list.component';
import {AccessoryCreateComponent} from './accessory-create/accessory-create.component';
import {AccessoryUpdateComponent} from './accessory-update/accessory-update.component';

@NgModule({
  declarations: [
    AccessoryListComponent,
    AccessoryCreateComponent,
    AccessoryUpdateComponent,
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccessoriesModule {}
