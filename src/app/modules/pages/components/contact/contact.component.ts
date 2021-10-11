import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent
  implements
    OnInit,
    AfterViewInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    OnDestroy
{
  // ElementRef
  @ViewChild('inputEl', { static: true }) input: any;

  @ViewChild('paragraphEl') paragraph: any;

  @ViewChild('addressEl') address: any;

  @Output() sendData = new EventEmitter<String>();

  @Input() contactData: string = '';

  public domainData: any = 'domain data';

  public isLoader: Boolean = true;

  public TODOITEMS: any = [];

  constructor(private pageDataSvc: PageDataService, private elRef: ElementRef) {
    this.elRef.nativeElement;
    console.log('constructor ran');
  }

  ngOnInit(): void {
    console.log('ngoninit ran');
    this.domainData = 'this.pageDataSvc.getData()';
    this.pageDataSvc.getTodos().subscribe((todo) => {
      setTimeout(() => {
        this.isLoader = false;
        // console.log(todo);
        this.TODOITEMS = todo;
      }, 500);
    });
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked ran');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit ran');
  }

  ngOnChanges() {
    console.log('ngOnChanges ran');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked ran');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit ran');
    console.log(this.input.nativeElement.value);
    console.log(this.paragraph.nativeElement.textContent);
    console.log(this.address.nativeElement);
    console.log(this.address.nativeElement.name);

    console.log(this.elRef);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy ran');
  }

  sendSomeData(data: String) {
    console.log('data is sent from child:==========>', data);
    this.sendData.emit(data);
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
