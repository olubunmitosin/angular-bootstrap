import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	banner = {
		title: 'Give your doubt the best short in the world of today\'s technology',
		description: 'We have the ultimate tool to make your tech setup a breeze'
	}

  constructor() { }

  ngOnInit() {
  }

}
