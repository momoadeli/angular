import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockInputComponent } from './lock-input/lock-input.component';
import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LockInputComponent,
    ValueAccessorExampleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    LockInputComponent,
    ValueAccessorExampleComponent
  ]
})
export class ComplexFormControlModule { }
