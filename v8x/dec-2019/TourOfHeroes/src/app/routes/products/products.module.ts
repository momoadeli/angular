import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
