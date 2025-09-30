import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbar } from './components/top-navbar/top-navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [
    TopNavbar,
    RouterOutlet,
  ]
})
export class App {
  protected readonly title = signal('hr-timesheet');
}
