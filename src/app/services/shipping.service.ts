import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShippingHistory } from '../models/shippingHistory';
import { Observable } from 'rxjs';
import { Warehouse } from '../models/warehouse';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  
  constructor(private http: HttpClient) { }
  
  getShippingHistory(): Observable<ShippingHistory[]> {
    const jsonUrl = 'assets/data/shippingHistory.json';
    return this.http.get<ShippingHistory[]>(jsonUrl);
  }

  getWarehouseAdress(): Observable<Warehouse[]> {
    const jsonUrl = 'assets/data/warehouse.json';
    return this.http.get<Warehouse[]>(jsonUrl);
  }
}