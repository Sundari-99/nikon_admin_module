import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  sideMenu = [
    { name: "Home", route: "home", toolTip: "home", icon: "home" },
    { name: "Login", route: "login", toolTip: "login", icon: "account_box" },
    { name: "Global Admin Settings", route: "global-admin", toolTip: "global admin", icon: "admin_panel_settings" },
    { name: "Country Admin Settings", route: "country-admin", toolTip: "country admin", icon: "manage_accounts" },
    { name: "Global Survey Management", route: "survey", toolTip: "admin survey", icon: "event" },
    { name: "Country Survey Management", route: "survey_1", toolTip: "country survey", icon: "event_note" },
    { name: "Logout", route: "login", toolTip: "logout", icon: "logout" }
  ];
  
  collapse = false;
  public current_url;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.common.isOpened.subscribe(value => {
      this.collapse = value;
    })

    this.common.current_url.subscribe(value => {
      this.current_url = value;
    })
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }
}
