import { Component, OnInit } from '@angular/core';
import { PageDataService } from '@app/modules/pages/services/page-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public mydata: any;

  constructor(private dataSvc: PageDataService) {}

  ngOnInit(): void {
    this.mydata = this.dataSvc.getData();
  }
}
