import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  firstName = 'Pradeep';
  lastName = 'Bandaru';
  isDisabled = true;
  clickCount = 0;
  ngOnInit(): void {
  }
  clickMe() {
    this.clickCount++;
  }
}
