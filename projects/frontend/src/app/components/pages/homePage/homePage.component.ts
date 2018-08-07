import {Component, OnInit} from '@angular/core';

import {Quote} from './components/quote/classes/quote';

import {QuotesService} from '../../../services/quotes.service';

@Component({
  selector: 'home-page-component',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent implements OnInit{
  quote: Quote;

  constructor (private quotesService: QuotesService) {
  }

  ngOnInit(): void{
    this.quotesService.getRandomQuote().then(randomQuote => {
      this.quote = randomQuote;
    });
  }
}
