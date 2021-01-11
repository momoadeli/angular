import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            BrowserAnimationsModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatFormFieldModule,
            MatCardModule,
            MatButtonModule,
            MatSnackBarModule
        ],
        exports: [
            BrowserAnimationsModule,
            MatProgressSpinnerModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatFormFieldModule,
            MatCardModule,
            MatButtonModule,
            MatSnackBarModule
        ]
    })
], AppMaterialModule);
export { AppMaterialModule };
//# sourceMappingURL=app-material.module.js.map