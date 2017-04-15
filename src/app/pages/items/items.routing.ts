import { Routes, RouterModule } from '@angular/router'
import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail.component';
// import { Inputs } from './components/inputs/inputs.component'

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    // children:[
    //   {
    //     path: ':id',
    //     component: ItemDetailComponent
    //   }
    // ]

  },
  {
    path: ':id',
    component: ItemDetailComponent
  }

];

export const routing = RouterModule.forChild(routes);