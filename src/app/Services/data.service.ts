import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private empName = new BehaviorSubject('');
	currentEmp = this.empName.asObservable();

	constructor() {}
	// Rakshit sample app

	updateEmployee(message: string) {
		this.empName.next(message);
	}
}
