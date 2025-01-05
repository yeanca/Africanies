import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() user: User;

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('-translate-x-full');
  }

}
