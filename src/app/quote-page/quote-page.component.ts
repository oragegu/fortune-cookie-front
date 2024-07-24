import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../quote.service';
import { CommonModule } from '@angular/common';
import { QuoteDisplayComponent } from '../quote-display/quote-display.component';
import { Quote } from '../interfaces/quote.interface';


@Component({
  selector: 'app-quote-page',
  standalone: true,
  imports: [CommonModule, QuoteDisplayComponent],
  templateUrl: './quote-page.component.html',
  styleUrl: './quote-page.component.scss'
})
export class QuotePageComponent implements OnInit {
  quote: Quote | undefined;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Convert the id to a number
    this.quote = this.quoteService.getQuoteById(id);
  }
  goToAboutPage(): void {
    window.location.href = 'https://t2.world/';
  }

  readFullArticle(): void {
    if (this.quote != undefined) {
      window.open(this.quote.link, '_blank');
    }
  }
}
