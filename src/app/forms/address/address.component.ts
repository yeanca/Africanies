import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  // addressForm = FormGroup;
  @Input() title: string;
  @Input() addressForm!: FormGroup;
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  selectedCountryIso2: string = '';
  phoneCode: string = '';

  constructor(private builder: FormBuilder, private shippingService: ShippingService) { }

  ngOnInit(): void {

    this.shippingService.getCountries().subscribe(response => {
      this.countryList = response;
    }, (error) => console.error('Error:', error));
  }

  getStates(event: Event) {
    const selectedId = +(event.target as HTMLSelectElement).value;
    const country = this.countryList.find(x => x.id === selectedId);
    this.selectedCountryIso2 = country.iso2;
    if (this.selectedCountryIso2 != null) {
      this.shippingService.getStatesList(this.selectedCountryIso2.toString()).subscribe(response => {
        this.stateList = response;
      }, (error) => console.error('Error:', error));
    }
    this.shippingService.getCountryDetails(this.selectedCountryIso2).subscribe(response => {
      this.phoneCode = response.phonecode;
    })
  }

  getCities(event: Event) {
    const selectedId = +(event.target as HTMLSelectElement).value;
    const state = this.stateList.find(x => x.id === selectedId);
    if (state != null) {
      this.shippingService.getCityList(this.selectedCountryIso2, state.iso2).subscribe(response=>{
        this.cityList=response;
      });
    }
  }

  clearForm(): void {
    this.addressForm.reset();
    this.selectedCountryIso2 = '';
  }
}
