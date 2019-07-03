import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent implements OnInit {
  navbarOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}