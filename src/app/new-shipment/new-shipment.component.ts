import { Component } from '@angular/core';
import { AddressComponent } from '../forms/address/address.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-shipment',
  standalone: true,
  imports: [CommonModule,AddressComponent],
  templateUrl: './new-shipment.component.html',
  styleUrl: './new-shipment.component.css'
})
export class NewShipmentComponent {

}
