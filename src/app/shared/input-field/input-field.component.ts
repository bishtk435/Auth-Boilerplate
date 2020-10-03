import { Component, Input, OnInit, forwardRef, AfterContentChecked } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements OnInit, AfterContentChecked {

  @Input() type: string;
  @Input() labelName: string;
  @Input() iconName: string;


  fieldValue = '';

  writeValue(value: any): void {
  }

  propagateChange = (_: any) => {
  }

  registerOnChange(fn): void{
    this.propagateChange = fn;
  }

  registerOnTouched(): void{
  }

  constructor() { }

  ngOnInit(): void {
    this.propagateChange(this.fieldValue);
  }

  ngAfterContentChecked(): void {
    this.propagateChange(this.fieldValue);
  }
}
