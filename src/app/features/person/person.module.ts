import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
