import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  products(): Observable<Array<Product>> {

    return this.http.get('http://localhost:3000/api/products')
      // tslint:disable-next-line: no-any
      .pipe(map( (res: any) => {
        return res.data;
      }));
  }
}
