import { Routes, RouterModule } from '@angular/router'
import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';
// import { Inputs } from './components/inputs/inputs.component'

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  {
    path: ':id',
    component: ContactDetailComponent
  }
];

export const routing = RouterModule.forChild(routes);