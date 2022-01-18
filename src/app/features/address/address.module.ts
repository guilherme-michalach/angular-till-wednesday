import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    SharedModule
  ]
})
export class AddressModule { }
