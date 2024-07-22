import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { QuoteService } from '../quote.service';
import { Quote } from '../interfaces/quote.interface';

@Component({
  selector: 'app-share-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './share-buttons.component.html',
  styleUrl: './share-buttons.component.scss'
})
export class ShareButtonsComponent {

  currentQuote: Quote = {
    id: -1,
    quote: '',
    link: '',
    image: ''
  };

  constructor(private quoteService: QuoteService) { }

  private shareText: String = 'I’m feeling inspired by this beautiful quote. Get your inspiration today at';
  private websiteLink: String = 'https://bejewelled-truffle-fb6d6c.netlify.app/ ';

  shareOnTwitter() {
    this.currentQuote = this.quoteService.getSelectedQuote();
    let twitterxUrl: String = this.shareText + '&url=' + this.websiteLink + '&hashtags=t2world';

    window.open('https://twitter.com/intent/tweet?text=' + twitterxUrl, '_blank');
  }

  shareOnWhatsApp() {
    let whatsappUrl: String = this.shareText + ' ' + this.websiteLink;
    window.open('https://api.whatsapp.com/send?&text=' + whatsappUrl, '_blank');
  }

  readFullArticle() {
    this.currentQuote = this.quoteService.getSelectedQuote();
    window.open(this.currentQuote.link, '_blank');
  }
}