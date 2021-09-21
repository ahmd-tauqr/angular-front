import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageDataService {
  public courseName: any = 'MEAN STACK BASICS';

  constructor(private http: HttpClient) {}
  // REST API endpoints

  getTodos() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/todos?start=1&_limit=50'
    );
  }

  getData() {
    return this.courseName;
  }
}
