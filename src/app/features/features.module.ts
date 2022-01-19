import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonModule } from './person/person.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { AddressModule } from './address/address.module';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HomeModule,
    PersonModule,
    ReactiveFormsModule
    // AddressModule,
  ]
})
export class FeaturesModule { }
