import { HostListener, Component, ViewEncapsulation,ViewChild, ElementRef,TemplateRef,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from "ngx-spinner";
import { CommonService } from './common.service';
import { faBell, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { SidebarModule } from 'ng-sidebar';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nikon';
  faBell = faBell
  faBars = faBars
  faSignoutAlt = faSignOutAlt
  isMobile: boolean = false;
  public innerWidth: any;
  current_url=[];
  _opened: boolean = true;
  _modeNum: number = 1;
  _positionNum: number = 0;
  _dock: boolean = true;
  _closeOnClickOutside: boolean = false;
  _closeOnClickBackdrop: boolean = false;
  _showBackdrop: boolean = false;
  _animate: boolean = true;
  _trapFocus: boolean = true;
  _autoFocus: boolean = true;
  _keyClose: boolean = false;
  _autoCollapseHeight: number = null;
  _autoCollapseWidth: number = null;
  _isExpand: boolean = false;
  sidebar: SidemenuComponent

  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  alerts: any[] = [];
  user_detail;
  constructor(private ref: ChangeDetectorRef, private spinner: NgxSpinnerService,private common_service:CommonService,private router: Router) {
    this.spinner.show();
    
    this.common_service.user_detail.subscribe(value => {
      this.user_detail = value;
      this.ref.markForCheck();
    })
    // this.notificationService.requestPermission();
		// this.socket.ListeningPushNotification().subscribe(data => {			
    //   if(this.user_detail!="" && data.message)
    //   {
    //     let data_message: Array<any> = [];
    //     data_message.push({
    //       'title': this.user_detail.store_detail.store_name,
    //       'alertContent': data.message
    //     });
    //     this.notificationService.generateNotification(data_message);
    //     this.common_service.set_new_notification('set');
    //   }
		// })
    this.router.events.subscribe((evt) => {
      if(evt instanceof NavigationStart) {
        this.spinner.show();
      }
      if (evt instanceof NavigationEnd ) {
        this.spinner.hide();
        this.current_url = evt.url.split('/');
        this.common_service.set_current_url(this.current_url);
        console.log(this.current_url.indexOf('login'))
        if(this.current_url.indexOf('login')==2)
        {
          this._opened=false;
        }
        
        this.ref.markForCheck();
        }
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
// ngjkn
      //we used ng-sidebar it doesn't support auto scorll to top option provided by angular. so this one manually scroll to top on every route change
      var sidebar_content = document.getElementsByClassName("ng-sidebar__content");
      sidebar_content[0].scroll({
        top: 0, 
        left: -30, 
        behavior: 'smooth'
      });
    });
    this.common_service.on_alert.subscribe(value => {
      this.alerts.push({
        type: value.type || 'success',
        msg: value.msg,
        timeout: value.timeout || 5000
      });
      this.alerts = _.uniqBy(this.alerts, 'msg');
    })
    this.common_service.toggle_sidebar.subscribe(value => {
      if(value=="sidebar")
      {
        if(this.isMobile)
          this._toggleOpened()
      }
      else
      {
        this._toggleOpened()
      }
    })
    this.common_service.delete_confirmation.subscribe(value => {
      this.open_delete_confirmation(value);
    })
  }
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  scrollToTop(el) {
    const duration = 600;
    const interval = 5;
    const move = el.scrollTop * interval / duration;
    observableInterval(interval).pipe(
      scan((acc, curr) => acc - move, el.scrollTop),
      tap(position => el.scrollTop = position),
      takeWhile(val => val > 0)).subscribe();
  }
  _toggleOpened(): void {
    this._opened = !this._opened;
    this.common_service.set_expand(!this._isExpand);
  }

  _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 300;
  }

  _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  _toggleDock(): void {
    this._dock = !this._dock;
  }

  _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  _onOpenStart(): void {
    
  }

  _onOpened(): void {
    
  }

  _onCloseStart(): void {
    
  }

  _onClosed(): void {
    
  }

  _onTransitionEnd(): void {
    
  }

  _onBackdropClicked(): void {
    
  }

  set_mobile_config()
  {
    this.isMobile = true;
    this._opened=false;
    this._modeNum=0;
    this._showBackdrop=true;
    this._closeOnClickBackdrop=true;
    
  }
  remove_mobile_config()
  {
    this.isMobile = false;
    this._opened=true;
    this._modeNum=1;
    this._showBackdrop=false;
    this._closeOnClickBackdrop=false;
    this._dock = false;
  }
  ngOnInit() {
    this.set_config();
  }
  set_config()
  {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth<=767)
    {
      this.set_mobile_config();
    }
    else
    {
      this.remove_mobile_config();
    }
  }
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    this.set_config();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.set_config();
  }

  // get_supplier_detail()
  // {
  //   let param={
  //     user_id:localStorage.getItem("waioz_ecommerce_id")
  //   }
  //   this.rest.post('get_user_detial',param).subscribe((response) => {
  //     this.common_service.set_user_detail(response.data.user);
  //     this.common_service.set_employee(response.data.employee);
  //   })    
  // }
  @ViewChild('autoShownModal', { static: false }) confirmation_model: ModalDirective;
  is_delete_confirmation = false;
  delete_data;
  open_delete_confirmation(value): void {
    this.delete_data = value;
    this.is_delete_confirmation = true;
  }
  close_delete_confirmation(): void {
    this.confirmation_model.hide();
  }
  onConfirmationModelHidden(): void {
    this.is_delete_confirmation = false;
  }
  confirm_delete()
  {
    this.common_service.set_delete_data(this.delete_data);
    this.confirmation_model.hide();
  }
}
