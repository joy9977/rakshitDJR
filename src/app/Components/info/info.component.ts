import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
	selector: 'info-component',
	templateUrl: './info.component.html',
	styleUrls: [ './info.component.css' ]
})
export class InfoComponent implements OnInit {
	customerSlug: string = ''; // slug instance variable of InfoComponent
	custObj = [
		{
			firstName: 'Henry',
			lastName: 'Gerard',
			age: 21,
			company: 'Livershool',
			gender: 'Male',
			custID: '3123',
			country: 'India',
			statee: 'TN'
		}
	];

	customers = {
		'henry-gerard': [ 'Henry', 'Gerard', 21, 'Livershool', 'Male', '3123', 'India', 'TN' ],
		'michael-platini': [ 'Michael', 'Platini', 40, 'Czecha', 'Male', '3198', 'USA', 'SF' ],
		'louis-figo': [ 'Louis', 'Figo', 37, 'Reala Madrida', 'Male', '3176', 'France', 'PA' ],
		'cristiana-ronaldinho': [ 'Cristiana', 'Ronaldinho', 15, 'Portugalia', 'Female', '3178', 'Portugal', 'LB' ],
		'leonardo-messiah': [ 'Leonardo', 'Messiah', 25, 'Barceloja', 'Female', '3165', 'Argentina', 'BA' ]
	};

	constructor(private appService: DataService) {}

	ngOnInit() {
		this.appService.currentEmp.subscribe((msg) => {
			this.customerSlug = msg;
			this.updateTable();
		});
	}

	updateTable() {
		// console.log('Updating Table');
		if (this.customerSlug != '') {
			// Update 'custObj'
			var keyy = this.customerSlug;
			var data = this.customers;
			for (const key in data) {
				if (data.hasOwnProperty(key) && key == keyy) {
					const element = data[key];
					var tmpObj = {
						firstName: element[0],
						lastName: element[1],
						age: element[2],
						company: element[3],
						gender: element[4],
						custID: element[5],
						country: element[6],
						statee: element[7]
					};
					// console.log('ARR:' + JSON.stringify(tmpObj));
					this.custObj.length = 0;
					this.custObj.push(tmpObj);
				}
			}
		}
	}
}
