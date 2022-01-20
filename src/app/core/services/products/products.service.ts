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

  setProduct(product: Product): void {
    this._product.next(product);
  }

  submit(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getOne(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  getProduct(): Observable<Product> {
    return this._product.asObservable();
  }

  upsert(product: Product): Observable<Product> {
    if (product.id) {
      return this.http.patch<Product>(`${this.baseUrl}/${product.id}`, product);
    } else {
      return this.http.post<Product>(`${this.baseUrl}`, product);
    }
  }
}
