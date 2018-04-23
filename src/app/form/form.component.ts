import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote:any
  newQuotename:string
  newQuoteauthor:string
  newQuotequotez:string

  @Output() addQuote=new EventEmitter();

  submitQuote(){
    this.newQuote=new Quotes(this.newQuotename,this.newQuoteauthor,this.newQuotequotez)
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
