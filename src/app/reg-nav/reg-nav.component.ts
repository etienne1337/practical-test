import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-nav',
  templateUrl: './reg-nav.component.html',
  styleUrls: ['./reg-nav.component.css']
})
export class RegNavComponent implements OnInit {

	public isMenuCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
	}
	
	onClickClose() {
		this.isMenuCollapsed = true;
		window.alert('Will close current page')
	}

}
