import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-errorhandling',
  templateUrl: './errorhandling.component.html',
  styleUrls: ['./errorhandling.component.css']
})
export class ErrorhandlingComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title = 'Global Error Handler in Angular' ;
  model: any;
  ngOnInit(): void {
  }
  throwError1(): any{
      console.log(this.model.profile.firstName);
  }
  throwError2(): any {
    try {
      throw new Error('Known Error');
    } catch (error) {
        throw error;
      }
    }
    failingRequest(): void {
      this.http.get('https://httpstat.us/404?sleep=2000').subscribe({
        next: data => {
           console.log(data);
        },
        error: error => {
            console.error('There was an error!', error);
        }
      });
    }
    Error403Request(): void {
      this.http.get('https://httpstat.us/403?sleep=2000').subscribe({
        next: data => {
           console.log(data);
        },
        error: error => {
            console.error('There was an error!', error);
        }
      });
    }
    Error401Request(): void {
      this.http.get('https://httpstat.us/401?sleep=2000').subscribe({
        next: data => {
           console.log(data);
        },
        error: error => {
            console.error('There was an error!', error);
        }
      });
    }
    Error500Request(): void {
      this.http.get('https://httpstat.us/500?sleep=2000').subscribe({
        next: data => {
           console.log(data);
        },
        error: error => {
            console.error('There was an error!', error);
        }
      });
    }
    successfulRequest(): void {
      this.http.get('https://httpstat.us/200?sleep=2000').toPromise();
    }
}
