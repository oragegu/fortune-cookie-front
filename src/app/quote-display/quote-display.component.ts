import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { QuoteService } from '../quote.service';
import { Quote } from '../interfaces/quote.interface';
import { ShareButtonsComponent } from '../share-buttons/share-buttons.component';
import { MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ImagePreloadService } from '../image-preload.service';
@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [CommonModule, ShareButtonsComponent, NgOptimizedImage],
  templateUrl: './quote-display.component.html',
  styleUrl: './quote-display.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('2s', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class QuoteDisplayComponent implements OnInit {
  quotes: Quote[] = [];
  currentQuote: Quote = {
    id: -1,
    quote: '',
    link: '',
    image: ''
  };

  imageLoaded: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<QuoteDisplayComponent>,
    private quoteService: QuoteService,
    private imagePreloadService: ImagePreloadService) { }

  ngOnInit() {
    this.quotes = this.quoteService.getQuotes();
    if (this.currentQuote.image) {
      this.imagePreloadService.getPreloadedImage(this.currentQuote.image);
    }
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.quoteService.selectQuote();
    this.currentQuote = this.quoteService.getSelectedQuote();
  }

  newQuote() {
    this.quoteService.selectQuote();
  }

  onCloseDialog(): void {
    this.dialogRef.close();
    this.imageLoaded = false;
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }
}