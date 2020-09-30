import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { logIn } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{isLoggedIn: boolean}>
    ) { }

  ngOnInit(): void { }

  onSubmit(): void{
    const payload = this.loginForm.value;
    console.log('this is form status: ', this.loginForm.status);
    if(this.loginForm.status === 'INVALID'){
      alert('Form is invalid');
      return;
    }
    this.store.dispatch(logIn({credential: payload}));
  }

  ngDoCheck(): void {
    this.store.select('isLoggedIn').subscribe( resp => {
      console.log('Store: isLoggedIn => ', resp);
    });
  }
}
