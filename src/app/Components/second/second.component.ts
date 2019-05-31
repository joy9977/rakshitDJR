import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
	selector: 'app-second',
	templateUrl: './second.component.html',
	styleUrls: [ './second.component.css' ]
})
export class SecondComponent implements OnInit {
	selectedSlug: string = '';
	constructor(private appService: DataService) {}

	customers = [
		{ firstName: 'Henry', lastName: 'Gerard', age: 21, slug: 'henry-gerard' },
		{ firstName: 'Michael', lastName: 'Platini', age: 40, slug: 'michael-platini' },
		{ firstName: 'Louis', lastName: 'Figo', age: 37, slug: 'louis-figo' },
		{ firstName: 'Cristiana', lastName: 'Ronaldinho', age: 15, slug: 'cristiana-ronaldinho' },
		{ firstName: 'Leonardo', lastName: 'Messiah', age: 25, slug: 'leonardo-messiah' }
	];

	ngOnInit() {
		this.appService.currentEmp.subscribe((msg) => (this.selectedSlug = msg));
	}

	viewInfoClick(event) {
		var target = event.target || event.srcElement || event.currentTarget;
		var idAttr = target.attributes.id;
		var value = idAttr.nodeValue;
		this.selectedSlug = value;
		// Now, if 'selectedSlug' not empty, show/update the below table for the respective 'slug'
		this.appService.updateEmployee(this.selectedSlug);
	}
}
