import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MyDataService } from './Services/my-data.service';
import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	title = 'Rakshit';
	environmentName = environment.envName;
	baseURL = environment.serverUrl;

	constructor(private newService: MyDataService, private renderer: Renderer2, private el: ElementRef) {
		this.title = 'DJR: in:' + this.environmentName + '-environment, and BaseURL: ' + this.baseURL;
	}

	@ViewChild('naviBtn') naviBtn: ElementRef;

	ngOnInit() {
		// console.log('SERVICE called from Main-App ' + this.newService.success());
		// Rakshit sample app
		document.getElementById('homeBtn').click();
	}

	setLayout(event) {
		var target = event.target || event.srcElement || event.currentTarget;
		var idAttr = target.attributes.id;
		var value = idAttr.nodeValue;
		this.renderer.setAttribute(this.naviBtn.nativeElement, 'routerLinkActive', '');
	}
}
