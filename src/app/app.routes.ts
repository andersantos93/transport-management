import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'list',
    title: 'Lista de entregas',
    component: DeliveryListComponent,
  },
];
