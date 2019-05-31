import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let request = req.clone({
			headers: new HttpHeaders().append('Authorization123DJR', 'abcde')
		});
		return next.handle(request).pipe(
			tap(
				(event: any) => {
					if (event instanceof HttpResponse) {
						console.log('api call success. Can modify the Response now: ', event);
					}
				},
				(error: any) => {
					if (error instanceof HttpErrorResponse) {
						console.log('Error. req url :: ' + req.url);
						if (error.status === 401) {
							// Handle-error
							// Rakshit sample app
						} else if (error.status === 403) {
							// Handle-error
						}
					}
				}
			)
		);
	}
}
