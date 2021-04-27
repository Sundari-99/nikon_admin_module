import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
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
  current_url: string[];

  constructor(private common: CommonService, private router: Router) {

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd ) {
        this.current_url = evt.url.split('/');
        this.common.set_current_url(this.current_url);
        console.log(this.current_url.indexOf('login'))
        if(this.current_url.indexOf('login')==2)
        {
          this.common.set_toogle(this.opened);
        }
      }
    })
  }

  ngOnInit(): void {}

  
}
