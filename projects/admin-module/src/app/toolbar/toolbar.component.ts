import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public opened;
  current_url: any;
  constructor(private common: CommonService) { }

  ngOnInit(): void {

    this.common.current_url.subscribe(value => {
      this.current_url = value;
    })
  }

  toggle(e) {
    this.opened = !this.opened;
    this.common.set_toogle(this.opened);
  }
}
