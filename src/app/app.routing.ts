import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './shared/layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './shared/layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule',
      },
      {
        path: 'users',
        loadChildren: './pages/users/users.module#UsersModule',
      },
      {
        path: 'events',
        loadChildren: './pages/events/events.module#EventsModule',
      },
      {
        path: 'accessories',
        loadChildren:
          './pages/accessories/accessories.module#AccessoriesModule',
      },
      {
        path: '',
        loadChildren: './pages/timeline/timeline.module#TimelineModule',
      },
      {
        path: 'components',
        loadChildren:
          './ui-components/components/components.module#ComponentsModule',
      },
      {
        path: 'forms',
        loadChildren: './ui-components/forms/forms.module#Forms',
      },
      {
        path: 'tables',
        loadChildren: './ui-components/tables/tables.module#TablesModule',
      },
      {
        path: 'maps',
        loadChildren: './ui-components/maps/maps.module#MapsModule',
      },
      {
        path: 'widgets',
        loadChildren: './ui-components/widgets/widgets.module#WidgetsModule',
      },
      {
        path: 'charts',
        loadChildren: './ui-components/charts/charts.module#ChartsModule',
      },
      {
        path: 'calendar',
        loadChildren: './ui-components/calendar/calendar.module#CalendarModule',
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './out-pages/out-pages.module#OutPagesModule',
      },
    ],
  },
];
