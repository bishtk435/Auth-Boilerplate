import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: '',
    password: ''
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('this is onsubmit', this.loginForm);
  }

  onSubmit(): void{
    console.log('this is onsubmit', this.loginForm);
  }

}
