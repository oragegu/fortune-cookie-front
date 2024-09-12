import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { QuoteDisplayComponent } from '../quote-display/quote-display.component';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog
} from '@angular/material/dialog';
import { QuoteService } from '../quote.service';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, QuoteDisplayComponent, MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('2s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
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
export class MainPageComponent implements AfterViewInit, OnInit {
  title = 't2 quotes';
  isDark = false;
  animationState = 'entered';
  // Boolean flag to track whether the component is shown or hidden
  show = false;


  img = "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png";
  private muted = false;

  // Getter method to determine the current state ('show' or 'hide') based on the 'show' flag
  get presentState() {
    return this.show ? 'show' : 'hide';
  }
  constructor(public dialog: MatDialog,
    private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.selectQuote();
    const randomQuote = this.quoteService.getSelectedQuote();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(QuoteDisplayComponent, {
      height: "auto",
      width: "auto",
      maxHeight: "98vh",
      maxWidth: "98vw",
      minHeight: "50vmin",
      minWidth: "50vmin",
      //panelClass: "centered-dialog",
      enterAnimationDuration: 2,
      exitAnimationDuration: 2,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The quote dialog was closed')
      // Pause audio when dialog closes
      this.playerRef.nativeElement.pause();
    })
    // Play audio when dialog opens
    this.playerRef.nativeElement.play();
  }

  @ViewChild('stream') playerRef!: ElementRef<HTMLAudioElement>;
  get $player(): HTMLAudioElement {
    return this.playerRef.nativeElement;
  }

  goToAboutPage(): void {
    window.location.href = 'https://t2.world/';
  }



  ngAfterViewInit() {
    console.log(this.$player);
    this.$player.volume = 0.1;
  }

  toggleSound() {
    if (this.muted == false) {
      this.img = "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/music_off-512.png";
      this.muted = true;
      this.$player.muted = true;
    } else {
      this.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png";
      this.muted = false;
      this.$player.muted = false;
    }
  }


}
