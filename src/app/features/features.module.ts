import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonModule } from './person/person.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { AddressModule } from './address/address.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonModule,
    AddressModule,
    HomePageModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
