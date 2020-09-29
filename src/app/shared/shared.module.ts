import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RadioComponent } from './radio/radio.component';



@NgModule({
  declarations: [InputFieldComponent, ButtonComponent, RadioComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports: [
    InputFieldComponent,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ButtonComponent,
    MatRadioModule,
    RadioComponent
  ]
})
export class SharedModule { }
