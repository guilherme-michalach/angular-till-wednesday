import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonModule } from './person/person.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { AddressModule } from './address/address.module';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpModule } from './help/help.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HomeModule,
    PersonModule,
    ReactiveFormsModule,
    HelpModule,
    ProductModule
    // AddressModule,
  ]
})
export class FeaturesModule { }
