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

  error = {
     firstName: '',
     lastName: '',
     username: '',
     email: '',
     password: '',
     password2: '',
     dob: '',
  };

  constructor(private fb: FormBuilder,
              private store: Store<{isLoggedIn: boolean}>) { }

  ngOnInit(): void {
  }

  isValidForm(): boolean{
    if (this.registerForm.value.firstName === ''){
      this.error.firstName = 'First Name Must Should Be Fill';
      return false;
    }else if (this.registerForm.value.lastName === ''){
      this.error.lastName = 'Last Name Must Should Be Fill';
      return false;
    }
    else if (this.registerForm.value.username === ''){
      this.error.username = 'User Name Must Should Be Fill';
      return false;
    }
    else if (this.registerForm.value.email === ''){
      this.error.email = 'Email Must Should Be Fill';
      return false;
    }
    else if (this.registerForm.value.password === ''){
      this.error.password = 'Password Must Should Be Fill';
      return false;
    }
    else if (this.registerForm.value.password2 === ''){
      this.error.password2 = 'Conform Your Password';
      return false;
    }
    else if (this.registerForm.value.dob === ''){
      this.error.dob = 'Enter Your Date Of Birth';
      return false;
    }
    else{
      return  true;
    }
  }

  onSubmit(): void{
    if (this.isValidForm()){
      console.log('this is in form: ', this.registerForm.value);
    }
  }

  ngDoCheck(): void {
    this.store.select('isLoggedIn').subscribe( resp => {
      console.log('this is register component: ', resp);
    });
  }
}
