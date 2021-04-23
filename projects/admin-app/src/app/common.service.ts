import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
	@Output() search_on_change: EventEmitter<String> = new EventEmitter();
	set_search(value)
	{
		this.search_on_change.emit(value);
	}

	@Output() toggle_sidebar: EventEmitter<String> = new EventEmitter();
	set_sidebar_toggle(value="")
	{
		this.toggle_sidebar.emit(value);
	}

	@Output() url_updated: EventEmitter<String> = new EventEmitter();
	set_current_url(value)
	{
		this.url_updated.emit(value);
	}

	@Output() on_alert: EventEmitter<String> = new EventEmitter();
	alert(value)
	{
		//alert types = success, info, warning, danger
		this.on_alert.emit(value);
	}

	@Output() user_detail: EventEmitter<String> = new EventEmitter();
	set_user_detail(value)
	{
		//alert types = success, info, warning, danger
		this.user_detail.emit(value);
	}

	@Output() get_employee: EventEmitter<String> = new EventEmitter();
	set_employee(value)
	{
		//alert types = success, info, warning, danger
		this.get_employee.emit(value);
	}
	

	@Output() delete_confirmation: EventEmitter<String> = new EventEmitter();
	set_delete_confirmation_data(value)
	{
		//alert types = success, info, warning, danger
		this.delete_confirmation.emit(value);
	}

	@Output() delete_detail: EventEmitter<String> = new EventEmitter();
	set_delete_data(value)
	{
		//alert types = success, info, warning, danger
		this.delete_detail.emit(value);
	}

	@Output() change_page: EventEmitter<String> = new EventEmitter();
	set_pagination_page(value)
	{
		this.change_page.emit(value);
	}

	@Output() pagination_data: EventEmitter<String> = new EventEmitter();
	set_pagination_data(value,section)
	{
		value.section = section;
		this.pagination_data.emit(value);
	}
	
	@Output() new_notification: EventEmitter<String> = new EventEmitter();
	set_new_notification(value)
	{
		this.new_notification.emit(value);
	}

	@Output() isExpand: EventEmitter<String> = new EventEmitter();
	set_expand(value)
	{
		this.isExpand.emit(value);
	}

}
