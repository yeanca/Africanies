import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShippingHistory } from '../models/shippingHistory';
import { Observable } from 'rxjs';
import { Warehouse } from '../models/warehouse';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shipmentAPIKey = 'aVB0V1owMHMyWmVTMktMOENreTRpeUdNSkRVNUV6QkRUTlNRZk11cw==';
  shipmentURL = 'https://api.countrystatecity.in/v1/countries';

  constructor(private http: HttpClient) { }

  getShippingHistory(): Observable<ShippingHistory[]> {
    const jsonUrl = 'assets/data/shippingHistory.json';
    return this.http.get<ShippingHistory[]>(jsonUrl);
  }

  getWarehouseAdress(): Observable<Warehouse[]> {
    const jsonUrl = 'assets/data/warehouse.json';
    return this.http.get<Warehouse[]>(jsonUrl);
  }

  getCountries(): Observable<any[]> {
    const headers = new HttpHeaders().set('X-CSCAPI-KEY', this.shipmentAPIKey);
    return this.http.get<any[]>(this.shipmentURL, { headers: headers });
  }

  getStatesList(country: string): Observable<any[]> {
    const headers = new HttpHeaders().set('X-CSCAPI-KEY', this.shipmentAPIKey);
    return this.http.get<any[]>(this.shipmentURL + `/${country}/states`, { headers: headers });
  }

  getCityList(country: string, state: string): Observable<any[]> {
    const headers = new HttpHeaders().set('X-CSCAPI-KEY', this.shipmentAPIKey);
    let url = `https://api.countrystatecity.in/v1/countries/${country}/states/${state}/cities`;
    return this.http.get<any[]>(url, { headers: headers })
  }

  getCountryDetails(country: string): Observable<any> {
    const headers = new HttpHeaders().set('X-CSCAPI-KEY', this.shipmentAPIKey);
    return this.http.get<any[]>(this.shipmentURL + `/${country}`, { headers: headers });
  }
}