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

  private viaCep = `${environment.cepUrl}`;

  private _address = new Subject<Address>();

  constructor(private http: HttpClient) { }

  all(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseUrl);
  }

  getAddress(id: number): String {
    let cep = this.http.get<Address>(`${this.viaCep}/${id}/json`);
    let city;

    return JSON.stringify(city);
  }

  getOne(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.viaCep}/${id}/json`);
  }

  getCityName(id: number) {
    let cep = this.http.get<Address>(`${this.viaCep}/${id}/json`);

  }

}
