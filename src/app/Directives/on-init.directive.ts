import { Directive, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
	selector: '[appOnInit]',
	exportAs: 'appOnInit'
})
export class OnInitDirective implements OnInit {
	// ng-init alternative for Angular-4
	// Rakshit sample app
	@Output() appOnInit: EventEmitter<any> = new EventEmitter();
	constructor() {}

	ngOnInit() {
		this.appOnInit.emit(0);
	}
}
