import { Component, OnInit } from '@angular/core';
import { PageDataService } from '@app/modules/pages/services/page-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public data: any;
  constructor(private ps: PageDataService) {}

  ngOnInit(): void {
    this.data = this.ps.getData();
  }
}
