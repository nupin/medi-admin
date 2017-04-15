import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';
import { routing } from './contact.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ContactListComponent,
    ContactDetailComponent
  ]
})
export class ContactModule {}