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
    quote: '',
    link: '',
    image: ''
  };

  constructor(private quoteService: QuoteService) { }

  shareOnTwitter() {
    this.currentQuote = this.quoteService.getSelectedQuote();
    let shareText: String = 'I’m feeling inspired by this beautiful quote. Get your inspiration today at';
    let websiteLink: String = 'https://bejewelled-truffle-fb6d6c.netlify.app/';
    let twitterxUrl: String = shareText + '&url=' + websiteLink + '&hashtags=t2world';

    window.open('https://twitter.com/intent/tweet?text=' + twitterxUrl, '_blank');
  }

  shareOnInstagram() {
    window.open('https://www.instagram.com/', '_blank');
  }

  readFullArticle() {
    window.open('https://app.t2.world/article/cltilxxnz41208321mcawxc5t7n', '_blank');
  }
}