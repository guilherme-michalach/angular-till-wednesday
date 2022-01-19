import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Address } from 'src/app/core/model/address';
import { AddressService } from 'src/app/core/services/address/address.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class AddressesDataResolver implements Resolve<Address[]> {
  constructor(private addressService: AddressService) {}

  resolve() {
    return this.addressService.all();
  }
}

@Injectable()
export class AddressDataResolver implements Resolve<Address> {
  constructor(private addressService: AddressService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.addressService.getOne(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: AddressesDataResolver
    }
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: AddressDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AddressesDataResolver, AddressDataResolver]
})
export class AddressRoutingModule { }
