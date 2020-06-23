import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccessoryCreateComponent} from './accessory-create/accessory-create.component';
import {AccessoryUpdateComponent} from './accessory-update/accessory-update.component';
import {AccessoryListComponent} from './accessory-list/accessory-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accessory/:id',
        component: AccessoryUpdateComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'accessory-list',
        component: AccessoryListComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'accessory-create',
        component: AccessoryCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoriesRoutingModule {}
