import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../quote.service';
import { CommonModule } from '@angular/common';
import { QuoteDisplayComponent } from '../quote-display/quote-display.component';
import { Quote } from '../interfaces/quote.interface';
import { Router } from '@angular/router';
import { MetaManageService } from '../meta-manage.service';

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
    private quoteService: QuoteService,
    private router: Router,
    private metaService: MetaManageService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Convert the id to a number
    this.quote = this.quoteService.getQuoteById(id);

    this.metaService.updateTitle('Quote - t2 quotes');
    if (this.quote != undefined) {
      this.metaService.updateDescription(this.quote.quote);
      this.metaService.updateTwitterImage("https://bejewelled-truffle-fb6d6c.netlify.app/" + this.quote.image.toString());
      console.log("https://bejewelled-truffle-fb6d6c.netlify.app/" + this.quote.image.toString());
    } else {
      this.metaService.updateDescription("");
      this.metaService.updateTwitterImage("https://bejewelled-truffle-fb6d6c.netlify.app/assets/images/no-quote.png");
    }
  }
  goToAboutPage(): void {
    window.location.href = 'https://t2.world/';
  }

  readFullArticle(): void {
    if (this.quote != undefined) {
      window.open(this.quote.link, '_blank');
    }
  }

  goToMainQuotePage(): void {
    this.router.navigateByUrl('');
  }

}
