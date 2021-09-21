import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public domainData: any;

  public isLoader: Boolean = true;

  public TODOITEMS: any = [];

  constructor(private pageDataSvc: PageDataService) {}

  ngOnInit(): void {
    this.domainData = 'this.pageDataSvc.getData()';
    this.pageDataSvc.getTodos().subscribe((todo) => {
      setTimeout(() => {
        this.isLoader = false;
        // console.log(todo);
        this.TODOITEMS = todo;
      }, 500);
    });
  }

  printID(id: any) {
    console.log(`id ${id} clicked`);
  }
}

// @Input
// @Output
// @ViewChild()
// ElementRef
// TemplateRef

// NgIF
// NgFor
// ngStyle
