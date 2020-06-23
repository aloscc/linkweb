import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { AccessorieListComponent } from './accessorie-list/accessorie-list.component';
import { AccessorieCreateComponent } from './accessorie-create/accessorie-create.component';
import { AccessorieUpdateComponent } from './accessorie-update/accessorie-update.component';


@NgModule({
  declarations: [AccessorieListComponent, AccessorieCreateComponent, AccessorieUpdateComponent],
  imports: [
    CommonModule,
    AccessoriesRoutingModule
  ]
})
export class AccessoriesModule { }
