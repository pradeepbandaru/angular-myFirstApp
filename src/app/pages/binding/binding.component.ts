import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  firstName = 'Pradeep';
  lastName = 'Bandaru';
  isDisabled = true;
  className: any = 'btn-dark';
  clickCount = 0;
  ngOnInit(): void {
  }
  clickMe(): any {
    this.clickCount++;
  }
  saveUser(): any {
    this.globalService.setUserInfo({
      firstName: this.firstName,
      lastName: this.lastName
    });
    alert('Saved Successfully to service');
  }
}
