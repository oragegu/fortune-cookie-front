import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../quote.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-page.component.html',
  styleUrl: './quote-page.component.scss'
})
export class QuotePageComponent implements OnInit {
  quote: any;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Convert the id to a number
    this.quote = this.quoteService.getQuoteById(id);
  }

  shareQuote(): void {
    if (this.quote) {
      const quoteUrl = `${window.location.origin}/quote/${this.quote.id}`;
      const shareText = `Check out this quote: ${this.quote.quote}`;
      if (navigator.share) {
        navigator.share({
          title: 'Quote',
          text: shareText,
          url: quoteUrl
        }).catch(console.error);
      } else {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(quoteUrl)}`, '_blank');
      }
    }
  }
}
