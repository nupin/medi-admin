import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './item-detail.component';
import { routing } from './items.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ItemsComponent,
    ItemDetailComponent
  ]
})
export class ItemsModule {}