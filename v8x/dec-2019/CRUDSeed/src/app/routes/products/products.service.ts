import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from './product.interface';
import { productsFake } from './products.fake';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products(): Observable<Array<Product>> {

    return of(productsFake)
      .pipe(
        delay(2000) // simulate http api delay (with global state swirl)
      );
  }
}
