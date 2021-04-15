import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error) => {
        let handled: boolean = false;
        console.log('error is intercept');
        console.error(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('Error Event');
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:      // login
                console.log(`Not Authorised `);
                alert(`Unauthorized ` + error.message);
                handled = true;
                break;
              case 403:     // forbidden
                console.log(`User Not allowed ` + error.message);
                alert(`User Not allowed ` + error.message);
                handled = true;
                break;
              case 404:     // not found
                console.log(`Not Found ` + error.message);
                alert(`Not Found ` + error.message);
                handled = true;
                break;
              case 500:     // not found
                console.log(`Service Down ` + error.message);
                alert(`Service Down ` + error.message);
                handled = true;
                break;
            }
          }
        }
        else {
          console.error('Other Errors');
          alert(`Other Errors ` + error.message);
        }
        return throwError(error.message);
      })
    );
  }
}
