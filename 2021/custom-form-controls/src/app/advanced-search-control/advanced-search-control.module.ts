import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormFieldContainerComponent } from './search-form-field-container/search-form-field-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { CustomFormFieldControlComponent } from './custom-form-field-control/custom-form-field-control.component';
import { MatInputModule, MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';

@NgModule({
  declarations: [
    SearchFormFieldContainerComponent,
    CustomFormFieldControlComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule
  ],
  exports: [
    SearchFormFieldContainerComponent,
    CustomFormFieldControlComponent
  ]
})
export class AdvancedSearchControlModule { }
