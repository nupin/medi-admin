import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { OrderListComponent } from './order-list.component';
import { OrderDetailComponent } from './order-detail.component';
import { routing } from './order.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    OrderListComponent,
    OrderDetailComponent
  ]
})
export class OrderModule {}