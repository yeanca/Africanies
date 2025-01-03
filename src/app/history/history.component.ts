import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../services/shipping.service';
import { ShippingHistory } from '../models/shippingHistory';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  shippingHistory: ShippingHistory[] = [];

  constructor(private shippingService: ShippingService) { }

  ngOnInit(): void {
    this.shippingService.getShippingHistory().subscribe(response => {
      this.shippingHistory = response;
    });
  }

}
