import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { GuardsGuard } from '../core/guards/guards.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [
      GuardsGuard
    ],
    loadChildren: async () => import('./home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: 'people',
    canActivate: [
      GuardsGuard
    ],
    loadChildren: async () => import('./person/person.module').then((m) => m.PersonModule)
  },
  {
    path: 'address',
    canActivate: [
      GuardsGuard
    ],
    loadChildren: async () => import('./address/address.module').then((m) => m.AddressModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeaturesRoutingModule { }
