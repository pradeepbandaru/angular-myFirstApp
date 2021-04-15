import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }
  colspan = 2;
  fontSize = 15;
  pageHeader = 'Student Details';
    FirstName = 'Anurag';
    LastName = 'Mohanty';
    Branch = 'CSE';
    Mobile = 9876543210;
    Gender = 'Male';
    Age = 22;

  ngOnInit(): void {
  }

}
