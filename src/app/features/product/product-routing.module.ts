import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ListComponent } from './list/list.component';

@Injectable()
export class ProductsDataResolver implements Resolve<Product[]> {
  constructor(private productsService: ProductsService) {}

  resolve() {
    return this.productsService.all();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: ProductsDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductsDataResolver]
})
export class ProductRoutingModule { }
