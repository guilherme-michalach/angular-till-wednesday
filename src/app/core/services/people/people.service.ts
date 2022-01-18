import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../../model/Person';
import { AddressService } from '../address/address.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl = `${environment.baseUrl}/people`;

  private _address = this.address.getOne(47);

  private _person = new Subject<Person>();

  constructor(private http: HttpClient, private address: AddressService) {

  }

  all(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }


}
