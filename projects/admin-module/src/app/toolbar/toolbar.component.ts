import { Component, OnInit } from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  private sidenav: SidemenuComponent;
  constructor() { }

  ngOnInit(): void {
  }

  toggleChange() {
    this.sidenav.toggleSidebar();
  }
}
