import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `${environment.baseUrl}/products`;

  private _product = new Subject<Product>();

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

}
