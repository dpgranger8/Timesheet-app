import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatIcon,
  ],
  templateUrl: './top-navbar.html',
  styleUrl: './top-navbar.scss'
})
export class TopNavbar {

}
