import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
