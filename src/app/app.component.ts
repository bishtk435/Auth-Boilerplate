import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logIn } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auth Boilerplate';

  constructor(private store: Store<{isLoggedIn: boolean}>) {}

}
