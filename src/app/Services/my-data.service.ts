import { MyInterface } from '../interfaces/my-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class MyDataService {
	constructor(private httpClient: HttpClient) {
		// Rakshit sample app 
	}
	products: any = [];
	someUrl = '/src/app/dataa/something.json';
	baseUrl = 'https://reqres.in/api/products';

	fetchHttpSubscribedData() {
		this.httpClient.get('https://reqres.in/api/products').subscribe(
			(data: any[]) => {
				this.products = data;
				console.log('Got data: ' + JSON.stringify(data));
			},
			(error: any) => {}
		);
	}

	get_products() {
		this.httpClient.get(this.baseUrl).subscribe((res) => {
			console.log('Response: ' + res);
		});
	}

	success() {
		return 'This is some data';
	}
}
