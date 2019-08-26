import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
   new Quote(1, 'When I count my blessings,I count you twice.','you are my great blessing',new Date),
 new Quote(2,'am good but not angel','No body is good at all',new Date(2019,7,25)),
 new Quote(3,'When it rains look for rainbows. When it’s dark look for stars.','there is always a light at the end of the tunnel.',new Date(2019,7,24)),
 new Quote(4,'you can totally do this','Nothing is impossible',new Date(2019,7,22)),
 new Quote(5,'Feel the fear and do it anyway','Accepting what is happening in your life.',new Date(2019,7,21)),
 new Quote(6,'If you are not too long, I will wait here for you all my life.','Never get tired of waiting for you because our life is not too long',new Date(2019,7,23)),
 new Quote(7,'Life is like the ocean, it goes up and down.','this life has both times,time for happiness and time for sadness',new Date(2019,7,23))
   ];
//    toggleDetails(index){
    
//     this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }

// addNewQuote(quote){
//   let quoteLength = this.quotes.length;
//   quote.id = quoteLength+1;
//   quote.postedDate = new Date(quote.postedDate)
//   this.quotes.push(quote)
// }

//   deleteQuote(isReaded, index){
//     if (isReaded) {
//       let toDelete = confirm(`Are you sure you want to delete this quote?`)
//       if(toDelete){
//       this.quotes.splice(index,1)}
//     }
//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }
