import { Component } from '@angular/core';

@Component({
  selector: 'app-share-buttons',
  standalone: true,
  imports: [],
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
}