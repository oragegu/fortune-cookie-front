import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from '../quote.service';
import { Quote } from '../interfaces/quote.interface';
import { ShareButtonsComponent } from '../share-buttons/share-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [CommonModule, ShareButtonsComponent],
  templateUrl: './quote-display.component.html',
  styleUrl: './quote-display.component.scss'
})
export class QuoteDisplayComponent implements OnInit {
  quotes: Quote[] = [];
  currentQuote: Quote = {
    quote: '',
    link: '',
    image: ''
  };

  constructor(public dialogRef: MatDialogRef<QuoteDisplayComponent>, private quoteService: QuoteService) { }

  ngOnInit() {
    this.quotes = this.quoteService.getQuotes();
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
  }
}