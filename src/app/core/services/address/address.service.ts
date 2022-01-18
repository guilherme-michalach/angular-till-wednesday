import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = `${environment.baseUrl}/addresses`;

  private _address = new Subject<Address>();

  constructor(private http: HttpClient) { }

  all(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseUrl);
  }

  getAddress(address: Address): Observable<Address> {
    return this._address.asObservable();
  }

  getOne(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.baseUrl}/${id}`);
  }

}
