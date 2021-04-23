import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
