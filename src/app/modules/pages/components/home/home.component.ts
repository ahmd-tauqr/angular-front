import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pageName = 'unf76r7r6vkuyjtcjtdvmbjfyj';

  homeData: string = 'home component data';

  sendSomeData(e: any) {
    this.homeData = e;
    // console.log('event data: ', e);
  }

  public UserRegistration: any;

  constructor() {}

  ngOnInit(): void {}

  initForm() {}

  registerUser() {}
}
