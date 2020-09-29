import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class InputFieldComponent implements OnInit {
  @Input() controlName: string;
  @Input() type: string;
  @Input() labelName: string;
  @Input() iconName: string;

    writeValue(value: any): void {
     this.controlName = value;
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
  }

  updateInputField(newValue): void{
    this.controlName = newValue;
    this.propagateChange(this.controlName);
  }
}
