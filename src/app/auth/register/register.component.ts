import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck {

  registerForm = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    username: '',
    dob: '',
    email: '',
    password: '',
    password2: '',
  });

  constructor(private fb: FormBuilder,
              private store: Store<{isLoggedIn: boolean}>) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('this is in form: ', this.registerForm.value);
  }

  ngDoCheck(): void {
    this.store.select('isLoggedIn').subscribe( resp => {
      console.log('this is register component: ', resp);
    });
  }
}
