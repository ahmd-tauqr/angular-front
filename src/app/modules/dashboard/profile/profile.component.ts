import { Component, OnInit } from '@angular/core';
import { PageDataService } from '@app/modules/pages/services/page-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private ps: PageDataService) {}

  ngOnInit(): void {
    console.log('inside profile page============>', this.ps.getData());
  }
}
