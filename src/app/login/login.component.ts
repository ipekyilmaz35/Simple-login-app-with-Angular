import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor() { }

  onLogin(): void {
    if (this.username === 'user' && this.password ==='pass') {
      console.log('Login is successful');
    } else {
      console.log('Login is failed');
    }
  }
}
