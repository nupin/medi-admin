import { Routes, RouterModule } from '@angular/router'
import { OrderListComponent } from './order-list.component';
import { OrderDetailComponent } from './order-detail.component';
// import { Inputs } from './components/inputs/inputs.component'

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
  },
  {
    path: ':id',
    component: OrderDetailComponent
  }
];

export const routing = RouterModule.forChild(routes);