import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { StartComponent } from './start/start.component';
import { ProcessComponent } from './process/process.component';
import { ApproveComponent } from './approve/approve.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ManagementComponent } from './management/management.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'task',
        component: TaskComponent,
        data: {
          breadcrumb: 'Tasks'
        }
      },
      {
        path: 'start',
        component: StartComponent,
        data: {
          breadcrumb: 'Start Process'
        }
      },
      {
        path: 'process',
        component: ProcessComponent,
        data: {
          breadcrumb: 'Processes'
        }
      },
      {
        path: 'approve',
        component: ApproveComponent,
        data: {
          breadcrumb: 'Processes'
        }
      },
      {
        path: 'supplier',
        component: SupplierComponent,
        data: {
          breadcrumb: 'Processes'
        }
      },
      {
        path: 'management',
        component: ManagementComponent,
        data: {
          breadcrumb: 'Processes'
        }
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
