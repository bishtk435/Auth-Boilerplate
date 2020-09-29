import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control('')
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(): void{
    console.log('this is form submit');
    console.log('this is in form: ', this.loginForm);
  }
  
}
