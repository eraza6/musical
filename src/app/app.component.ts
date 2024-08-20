import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Options, SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleNotificationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  notificationsOptions: Options = {
    position: ['top', 'right'],
    timeOut: 3000,
  };
  authService = inject(AuthService);
  constructor() {
    this.authService.verifyLocalStorage();
  }
}
