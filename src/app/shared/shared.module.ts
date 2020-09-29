import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFieldComponent } from './input-field/input-field.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [InputFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    InputFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
})
export class SharedModule { }
