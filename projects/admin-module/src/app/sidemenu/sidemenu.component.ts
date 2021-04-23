import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  sideMenu = [
    { name: "Login", route: "login", toolTip: "login class material", icon: "account_box" },
    { name: "Survey Management", route: "survey", toolTip: "survey class material", icon: "event" },
    { name: "Logout", route: "", toolTip: "logout class material", icon: "logout" }
  ];
  
  collapse = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }
}
