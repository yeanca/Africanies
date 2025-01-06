import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() user: User;
  isSidebarCollapsed = false;

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('-translate-x-full');
  }

  // sidebar(){
  //   this.isSidebarCollapsed = !this.isSidebarCollapsed;
  // }

}
