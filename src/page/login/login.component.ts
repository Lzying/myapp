import { Component } from '@angular/core';
import {}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hh: string;
  login() {
    this.hh = '/page/user';
  }
}
