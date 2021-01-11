import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as RootStoreState from '../../../shared/root-store/root-state';
import { Product } from '../product.interface';
import { ProductsService } from '../products.service';
import * as ProductsActions from '../slice/actions';
import * as ProductsSelectors from '../slice/selectors';

@Component({
  selector: 'toh-seed-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  get products$(): Observable<Array<Product>> {
    return this.store.select(
      ProductsSelectors.selectProducts
    );
  }

  constructor(private productsService: ProductsService, private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new ProductsActions.ProductsRequestAction());
  }
}
