import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor(private pageDataSvc: PageDataService) {}

  public domainData: any;

  ngOnInit(): void {
    this.domainData = this.pageDataSvc.getData();
  }
}
