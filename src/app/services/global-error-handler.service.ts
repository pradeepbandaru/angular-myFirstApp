import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() { }
  handleError(error: any): any {
    console.error('An error occurred:', error.message);
    console.error(error);
    alert(error);
 }
}
