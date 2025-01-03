import { Component, Input, OnInit } from '@angular/core';
import { HistoryComponent } from '../history/history.component';
import { CardComponent } from '../card/card.component';
import { ShippingService } from '../services/shipping.service';
import { Warehouse } from '../models/warehouse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HistoryComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  warehouse: Warehouse[] = [];
  shuffledWarehouse: Warehouse[] = [];
  selectedWarehouse: Warehouse;
  selectedWarehouseId: number=0;
  @Input() user:User;
  constructor(private shippingService: ShippingService) { }
  ngOnInit(): void {
    this.shippingService.getWarehouseAdress().subscribe(response => {
      this.warehouse = response;
      this.shuffledWarehouse = [...this.warehouse].sort(() => 0.5 - Math.random()).slice(0, 5);
      this.selectedWarehouse = this.warehouse[0];
      this.selectedWarehouseId = this.warehouse[0].id;
    })
  }


  updateSelectedWarehouse(event: Event) {
    const selectedId = +(event.target as HTMLSelectElement).value;
    const foundWarehouse = this.warehouse.find(x => x.id === selectedId);
    if(foundWarehouse!=null){
      this.selectedWarehouse = foundWarehouse;
    } else this.selectedWarehouse = this.warehouse[0];
  }


}
