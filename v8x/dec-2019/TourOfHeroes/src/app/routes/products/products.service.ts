import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products(): Observable<Array<Product>> {

    return of([
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: ''
      }
    ])
      .pipe(
        delay(2000) // simulate http api delay (with global state swirl)
      );
  }
}
