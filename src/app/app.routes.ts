import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewShipmentComponent } from './new-shipment/new-shipment.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'new-shipment', component: NewShipmentComponent },
];
