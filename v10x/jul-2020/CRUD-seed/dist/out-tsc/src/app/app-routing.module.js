import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpErrorComponent } from './routes/http-error/http-error.component';
import { LoginComponent } from './routes/login/login.component';
import { ProductListComponent } from './routes/products/product-list/product-list.component';
const routes = [
    { path: '', component: LoginComponent },
    { path: 'http-error', component: HttpErrorComponent },
    { path: 'product-list', component: ProductListComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map