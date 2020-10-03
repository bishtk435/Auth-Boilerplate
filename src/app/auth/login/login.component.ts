import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { timestamp } from 'rxjs/operators';
import { logIn } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required, Validators.minLength(8)])
  });

  loginStatus$: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<{isLoggedIn: boolean}>
    ) {
           this.store.select('isLoggedIn').subscribe( resp => {
             this.loginStatus$ = resp;
           });
    }

  ngOnInit(): void {
    this.store.select('isLoggedIn').subscribe(resp => {
      console.log('this is in sotre: ', resp);
    });
   }

  onSubmit(): void{
    const payload: object = this.loginForm.value;
    console.log('this is form status: ', this.loginForm);
    if (this.loginForm.status === 'INVALID'){
      alert('Form is invalid');
      return ;
    }
    this.store.dispatch(logIn({credentials: payload}));
  }

}
