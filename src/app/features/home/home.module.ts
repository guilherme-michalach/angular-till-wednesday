import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ViewComponent } from './view/view.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
