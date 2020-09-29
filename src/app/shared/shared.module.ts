import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [InputFieldComponent],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    InputFieldComponent,
    MatInputModule
  ]
})
export class SharedModule { }
