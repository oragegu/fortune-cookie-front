import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from './interfaces/quote.interface';
import quotesData from '../assets/quotes.json'

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: Quote[] = quotesData;

  private selectedQuote: Quote = {
    id: -1,
    quote: '',
    link: '',
    image: ''
  };

  getQuotes(): Quote[] {
    return this.quotes;
  }

  selectQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[randomIndex];

  }

  getSelectedQuote(): Quote {
    return this.selectedQuote;
  }

  getQuoteById(id: number): Quote | undefined {
    return this.quotes.find(q => q.id === id);
  }
}