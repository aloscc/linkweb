import {Routes} from '@angular/router';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserUpdateComponent} from './user-update/user-update.component';
import {UserListComponent} from './user-list/user-list.component';

export const UsersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user',
        component: UserCreateComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'user/:id',
        component: UserUpdateComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'user-create',
        component: UserCreateComponent,
      },
    ],
  },
];
