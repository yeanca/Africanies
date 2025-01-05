import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Africanies';
  user: User;
  sidebarVisible = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.fetchUser().subscribe(response => {
      this.user = response;
    })
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
