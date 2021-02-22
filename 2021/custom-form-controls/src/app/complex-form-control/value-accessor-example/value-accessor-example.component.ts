import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.css']
})
export class ValueAccessorExampleComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: new FormControl(),
    });

  }

  onSubmit(): void {
    console.log('this form value: ', this.form.value);
  }
}
