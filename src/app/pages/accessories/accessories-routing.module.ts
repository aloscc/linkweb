import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccessorieCreateComponent} from './accessorie-create/accessorie-create.component';
import {AccessorieUpdateComponent} from './accessorie-update/accessorie-update.component';
import {AccessorieListComponent} from './accessorie-list/accessorie-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accessorie/:id',
        component: AccessorieUpdateComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'accessorie-list',
        component: AccessorieListComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'accessorie-create',
        component: AccessorieCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoriesRoutingModule {}
