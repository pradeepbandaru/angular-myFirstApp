import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  // tslint:disable-next-line:variable-name
  constructor() { }
  public getUserInfo(): any {
    return JSON.parse(localStorage.getItem('userInfo') || '{}') ;
  }
  public setUserInfo(data: any): any {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

}
