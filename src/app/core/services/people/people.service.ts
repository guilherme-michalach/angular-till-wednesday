import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../../model/Person';
import { AddressService } from '../address/address.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private baseUrl = `${environment.baseUrl}/people`;

  private _address = this.address.getOne(47);

  private _person = new Subject<Person>();

  constructor(private http: HttpClient, private address: AddressService) {}

  all(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  setPerson(person: Person): void {
    this._person.next(person);
  }

  submit(person: Person): Observable<Person> {
    person.age = Number(person.age);
    return this.http.post<Person>(this.baseUrl, person);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getOne(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  getPerson(): Observable<Person> {
    return this._person.asObservable();
  }


  upsert(person: Person): Observable<Person> {
    person.age = Number(person.age);

    // person.address = this.address.getOne(person.address).subscribe((value) => {
    //   this.cepName[0] = (value.localidade)
    //   console.log(this.cepName[0])
    // });

    if (person.id) {
      return this.http.patch<Person>(`${this.baseUrl}/${person.id}`, person);
    } else {
      return this.http.post<Person>(`${this.baseUrl}`, person);
    }
  }
}
