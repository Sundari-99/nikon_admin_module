import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-admin',
  templateUrl: './global-admin.component.html',
  styleUrls: ['./global-admin.component.scss']
})
export class GlobalAdminComponent implements OnInit {

  country=["Belgium","Australia"];
  constructor() { 
   }
   get_index(index)
   {
     var index_value=index;
     console.log(index_value)
   }

  ngOnInit(): void {
  }
}
