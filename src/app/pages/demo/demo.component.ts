import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(public globalService: GlobalService) { }
  color = 'red';
  userInfo: any;
  wordCountText: any;
  ngOnInit(): void {
    this.userInfo = this.globalService.getUserInfo();
  }

}
