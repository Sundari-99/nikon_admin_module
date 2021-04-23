import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  @Output() isExpand: EventEmitter<String> = new EventEmitter();
	set_toogle(value)
	{
		this.isExpand.emit(value);
	}
}
