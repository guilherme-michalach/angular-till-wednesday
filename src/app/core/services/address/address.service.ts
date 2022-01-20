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

  private cep: number = 0;

  private viaCep = `${environment.cepUrl}`;

  private _address = new Subject<Address>();

  constructor(private http: HttpClient) { }

  all(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseUrl);
  }

  getAddress(id: number): String {
    let cep = this.http.get<Address>(`${this.viaCep}/${id}/json`);
    let city;
    cep.subscribe((value) => {
      city = value.localidade;
      return city
    })

  //   this.addressService.getOne(cep).subscribe((value) => {
  //     return console.log(value.localidade);
  //   })
  // }

    return city;
  }

  test: string;

  getOne(id: number): Observable<Address> {
    let cep = this.http.get<Address>(`${this.viaCep}/${id}/json`);
    let city;
    cep.subscribe((value) => {
      this.test = value.localidade;
      return console.log(value.localidade)
    })

  //   this.addressService.getOne(cep).subscribe((value) => {
  //     return console.log(value.localidade);
  //   })
  // }

    return city;
  }

}
