import { Component } from '@angular/core';
import { AddressComponent } from '../forms/address/address.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-shipment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddressComponent],
  templateUrl: './new-shipment.component.html',
  styleUrl: './new-shipment.component.css'
})
export class NewShipmentComponent {
  multistepForm: FormGroup;
  currentStep: number = 1;

  constructor(private builder:FormBuilder){
    this.multistepForm = this.builder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.builder.group({
        savedAddress: [''],
        country: ['', Validators.required],
        state: ['', Validators.required],
        originChargesIncluded: [false],
        fullName: ['', Validators.required],
        contactName: [''],
        address: ['', Validators.required],
        isResidential: [false],
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        otherInfo: [''],
        email: ['', [Validators.required, Validators.email]],
        phoneCode: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        saveSenderInfo: [false],
      }),
    });
  }

  prevStep(): void {
    if (this.currentStep > 1) this.currentStep--;
  }

  nextStep(): void {
    if (this.currentStep < 3) this.currentStep++;
  }

  isStepValid(): boolean {
    if (this.currentStep === 1) {
      return this.multistepForm.get('fullName')?.valid && this.multistepForm.get('email')?.valid;
    }
    if (this.currentStep === 2) {
      return this.multistepForm.get('address')?.valid;
    }
    return true;
  }

  submitForm(): void {
    if (this.multistepForm.valid) {
      console.log('Form Submitted:', this.multistepForm.value);
      alert('Form successfully submitted!');
    }
  }

  get addressForm(): FormGroup {
    return this.multistepForm.get('address') as FormGroup;
  }

}
