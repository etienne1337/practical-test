import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
  registerForm = this.fb.group({
    companyName: [null, Validators.required],
    legalName: [null, Validators.required],
    country: [null, Validators.required],
    entity: [null, Validators.required],
    registration: [null, [Validators.required, Validators.pattern(/^[0-9]*/)]],
    vat: [null, [Validators.required, Validators.pattern(/^[0-9]*/)]],
		overview: [null, [Validators.required, Validators.minLength(20)]],
		email: [null, [Validators.required, Validators.email]],
		cellPrefix: ['+27', [Validators.required]],
		cellphone: [null, [Validators.pattern(/^[0-9]*/)]],
		city: [null],
		suburb: [null],
		street: [null],
		unit: [null],
		zip: [null],
  });

	
 	public isAllValid: boolean = false;

  states = [
		{name: 'South Africa', abbreviation: 'RSA'},
		{name: 'Australia', abbreviation: 'AU'},
    {name: 'America', abbreviation: 'USA'},
    {name: 'Italy', abbreviation: 'ITA'},
    {name: 'Romania', abbreviation: 'ROM'},
	];

	prefix_codes = [
    {name: '+27', abbreviation: '+27'},
		{name: '+61', abbreviation: '+61'},
		{name: '+1', abbreviation: '+1'},
    {name: '+55', abbreviation: '+55'},
    {name: '+9', abbreviation: '+9'},
  ];
	
	entities = [
    {name: 'Sole Proprietorship', abbreviation: 'Pty'},
		{name: 'Partnership', abbreviation: 'Prt'},
		{name: 'Proprietary limited company', abbreviation: 'Pty Ltd'},
    {name: 'Public Company', abbreviation: 'PubC'},
    {name: 'Franchise', abbreviation: 'FRA'},
	];

	cities = [
		{name: 'Johannesburg', abbreviation: 'JHB'},
		{name: 'Pretoria', abbreviation: 'PTA'},
    {name: 'Capetown', abbreviation: 'CPT'},
    {name: 'Durban', abbreviation: 'DBZ'},
    {name: 'Port Eizabeth', abbreviation: 'PE'},
	]

	suburbs = [
		{name: 'Robindale', abbreviation: 'RBD'},
		{name: 'Randburg', abbreviation: 'RBG'},
    {name: 'Sandton', abbreviation: 'STN'},
    {name: 'Soweto', abbreviation: 'SWT'},
    {name: 'Alberton', abbreviation: 'ALB'},
	]
	
	

  constructor(private fb: FormBuilder) {

	}

  onSubmit() {
    alert('Thanks!');
	}
	
	onSelectImage() {
		alert('Will open file browser for user')
	}
}
