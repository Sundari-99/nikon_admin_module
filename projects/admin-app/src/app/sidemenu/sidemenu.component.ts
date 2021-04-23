import { Component, OnInit, ViewEncapsulation,HostListener,ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { CommonService } from '../common.service';
import { faChartLine, faSignOutAlt, faHome, faLock } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  faChartLine=faChartLine
  faSignOutAlt=faSignOutAlt
  faHome = faHome
  faLock = faLock
  isExpand;
  current_url=[];
  user_detail;
  constructor(private ref: ChangeDetectorRef,private common_service:CommonService) {
    this.common_service.url_updated.subscribe(value => {
      this.current_url = value;
      this.ref.markForCheck();
    })
    this.common_service.user_detail.subscribe(value => {
      this.user_detail = value;
      this.ref.markForCheck();
    })
    this.common_service.isExpand.subscribe(value => {
      this.isExpand = value;
    })
  }
  @HostListener('scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log("DSDSDS");
  }
  ngOnInit(): void {
  }
  toggleSidebar()
  {
    this.common_service.set_sidebar_toggle("sidebar");
    // this.ref.markForCheck();
  }


}
