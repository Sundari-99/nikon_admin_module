import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  	@Output() isOpened: EventEmitter<String> = new EventEmitter();
	set_toogle(value)
	{
		this.isOpened.emit(value);
	}

	@Output() current_url: EventEmitter<String> = new EventEmitter();
	set_current_url(value)
	{
		this.current_url.emit(value);
	}
}
