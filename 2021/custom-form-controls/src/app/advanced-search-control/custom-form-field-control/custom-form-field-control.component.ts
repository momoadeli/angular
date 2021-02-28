import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';

export interface IFormFieldValue {
  query: string;
  scope: string;
}

@Component({
  selector: 'app-custom-form-field-control',
  templateUrl: './custom-form-field-control.component.html',
  styleUrls: ['./custom-form-field-control.component.css'],
  providers: [{
    provide: MatFormFieldControl,
    useExisting: CustomFormFieldControlComponent
  }]
})
export class CustomFormFieldControlComponent implements OnInit, MatFormFieldControl<IFormFieldValue> {

  value: IFormFieldValue;
  stateChanges: Observable<void> = new Subject();
  id: string;
  placeholder: string;
  ngControl: NgControl;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  autofilled?: boolean;
  userAriaDescribedBy?: string;

  constructor() { }

  setDescribedByIds(ids: string[]): void {
    // throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
