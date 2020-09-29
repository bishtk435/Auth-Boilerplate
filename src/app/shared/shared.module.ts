import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFieldComponent } from './input-field/input-field.component';



@NgModule({
  declarations: [InputFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputFieldComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
