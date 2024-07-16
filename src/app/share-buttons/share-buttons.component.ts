import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-share-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './share-buttons.component.html',
  styleUrl: './share-buttons.component.scss'
})
export class ShareButtonsComponent {
  shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?text=Here is the quote &url=&hashtags=quote', '_blank');
  }

  shareOnInstagram() {
    window.open('https://www.instagram.com/', '_blank');
  }

  readFullArticle() {
    window.open('https://app.t2.world/article/cltilxxnz41208321mcawxc5t7n', '_blank');
  }
}