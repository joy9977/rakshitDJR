import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RemoveSpacesPipe } from './Pipes/remove-spaces.pipe';
import { OnInitDirective } from './Directives/on-init.directive';

import { MyDataService } from './Services/my-data.service';
import { MyInterceptor } from './Services/my-interceptor';
import { FirstComponentComponent } from './Components/first-component/first-component.component';
import { SecondComponent } from './Components/second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './Components/table/table.component';
import { InfoComponent } from './Components/info/info.component';
import { DataService } from './Services/data.service';
import { OrderPipe } from 'ngx-order-pipe';
import { from } from 'rxjs';

const routess: Routes = [
	{ path: '1st', component: FirstComponentComponent },
	{ path: '2nd', component: SecondComponent }
];
@NgModule({
	declarations: [
		AppComponent,
		RemoveSpacesPipe,
		OnInitDirective,
		FirstComponentComponent,
		SecondComponent,
		TableComponent,
		InfoComponent,
		OrderPipe
	],
	imports: [ BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, RouterModule.forRoot(routess) ],
	providers: [ MyDataService, DataService, { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
// Rakshit sample app