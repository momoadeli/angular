import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpErrorComponent } from './routes/http-error/http-error.component';
import { LoginComponent } from './routes/login/login.component';
import { ProductListComponent } from './routes/products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'http-error', component: HttpErrorComponent },
  { path: 'product-list', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
