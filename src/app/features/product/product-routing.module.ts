import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class ProductsDataResolver implements Resolve<Product[]> {
  constructor(private productsService: ProductsService) {}

  resolve() {
    return this.productsService.all();
  }
}

@Injectable()
export class ProductDataResolver implements Resolve<Product> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.productsService.getOne(route.params.id);
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
  {
    path: 'add',
    component: FormComponent
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: ProductsDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductsDataResolver, ProductDataResolver]
})
export class ProductRoutingModule { }
