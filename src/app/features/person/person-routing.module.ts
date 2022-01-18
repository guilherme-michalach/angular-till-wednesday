import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { Person } from 'src/app/core/model/Person';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { ListComponent } from './list/list.component';

@Injectable()
export class PeopleDataResolver implements Resolve<Person[]> {
  constructor(private peopleService: PeopleService) { }

  resolve() {
    return this.peopleService.all();
  }
}

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    resolve: {
      entities: PeopleDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PeopleDataResolver]
})
export class PersonRoutingModule { }
