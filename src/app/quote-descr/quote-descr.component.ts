import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-descr',
  templateUrl: './quote-descr.component.html',
  styleUrls: ['./quote-descr.component.css']
})
export class QuoteDescrComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isReaded = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isReaded.emit(complete);
  }
 

  constructor() { }

  ngOnInit() {
  }

}
