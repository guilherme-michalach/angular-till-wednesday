import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonModule } from './person/person.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { AddressModule } from './address/address.module';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonModule,
    AddressModule,
    FeaturesRoutingModule,
    HomeModule,
    CoreModule
  ]
})
export class FeaturesModule { }
