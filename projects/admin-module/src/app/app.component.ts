import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-module';
  isExpanded: boolean;
  element: any;
  public opened: boolean;

  constructor(private common: CommonService) {
  }

  ngOnInit(): void {
    this.opened = true;
  }

}
