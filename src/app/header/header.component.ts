import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  quotes=[]
  prev:number
  after:number
  count:number
 
  newQuote(myQuote){
    this.quotes.push(myQuote)
  }
  upVote(i){
    this.quotes[i].upvotes +=1
    console.log("Higest:"+this.prev)
  }
  downVote(i){
    this.quotes[i].downvotes +=1
  }
  delQuote(i){
    if(confirm("are you sure?")){
      this.quotes.splice(i,1)
    }
  }
  getHighest(){
    this.prev=0
    this.after=0
    for(this.count=0;this.count<this.quotes.length;this.count++){
      this.prev=this.quotes[this.count].upvotes
      if(this.prev>this.after){
        this.after=this.prev
      }
    }
    console.log("Higest:"+this.prev)
    return this.prev
    }
    constructor() { }

    ngOnInit() {
    }

  }

