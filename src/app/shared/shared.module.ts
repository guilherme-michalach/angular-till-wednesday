import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatTableModule
  ],
  exports: [
    ListComponent,
  ],
})
export class SharedModule {}
