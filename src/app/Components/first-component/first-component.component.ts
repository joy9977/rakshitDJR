import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../Services/my-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-first-component',
	templateUrl: './first-component.component.html',
	styleUrls: [ './first-component.component.css' ]
})
export class FirstComponentComponent implements OnInit {
	selectedComments: any = '';
	selectedTxt: any = '';
	products: any = [];
	productsObservable: Observable<any[]>;
	baseUrl = 'https://reqres.in/api/products';
	baseUrl1 = 'https://jsonplaceholder.typicode.com/users';

	constructor(private httpService: MyDataService, private httpClient: HttpClient) {
		this.selectedComments = '';
		this.selectedTxt = '';
		// Rakshit sample app
	}

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this.httpClient.get(this.baseUrl1).subscribe((dataa: any[]) => {
			console.log('Got HTTPData from firstComponent: ' + JSON.stringify(dataa));
			this.products = dataa;
		});
	}

	selectedTxtchange(val: any): void {
		console.log('on selectedTxtchange: ' + val);
	}

	selectedInpchange(evt: Event): void {
		// let vall = (evt.target as HTMLInputElement).value;
		console.log('on selectedInpchange: ' + evt);
	}

	someFunct(): void {
		console.log('I am on-init directive');
	}
}
