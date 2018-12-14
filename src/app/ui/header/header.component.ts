import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public href: string = "";
  public filtered_url: string = "";

  banner = {
		title: 'As one of the first to offer a quality online education,',
		description: 'we\’ve made it our mission to ensure that our online courses are equal in educational value to our traditional classes.'
	}

  constructor(private router: Router) { 

    this.href = this.router.url;
    this.filtered_url = this.href.replace('/','');
    this.filtered_url = this.filtered_url.replace('-',' ');
    // this.titleCaseWord();
  }

  ngOnInit() {


  }

}
