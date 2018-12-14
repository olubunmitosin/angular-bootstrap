import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  banner = {
    type : 'big'
  }

  feature = {
   title: 'Why Choose Us?',
   description: 'We have properly streamlined courseware made by experts to break every piece of the course to your best understanding.'
  }

  constructor() { }

  ngOnInit() {
  }

}
