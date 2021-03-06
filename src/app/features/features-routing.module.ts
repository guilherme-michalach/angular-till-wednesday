import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { GuardsGuard } from '../core/guards/guards.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [GuardsGuard],
    loadChildren: async () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'people',
    canActivate: [GuardsGuard],
    loadChildren: async () =>
      import('./person/person.module').then((m) => m.PersonModule),
  },
  // {
  //   path: 'addresses',
  //   canActivate: [GuardsGuard],
  //   loadChildren: async () =>
  //     import('./address/address.module').then((m) => m.AddressModule),
  // },

  // Rota desativada para desenvolver em outro momento
  {
    path: 'products',
    canActivate: [GuardsGuard],
    loadChildren: async () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'help',
    canActivate: [GuardsGuard],
    loadChildren: async () =>
      import('./help/help.module').then((m) => m.HelpModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
