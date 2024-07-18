import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog
} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuoteDisplayComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {
  title = 't2 quotes';
  isDark = false;
  animationState = 'entered';
  // Boolean flag to track whether the component is shown or hidden
  show = false;

  // Getter method to determine the current state ('show' or 'hide') based on the 'show' flag
  get presentState() {
    return this.show ? 'show' : 'hide';
  }
  playAudio() {
    let audio = new Audio();
    audio.src = "assets/rain-sound.mp3";
    audio.load();
    audio.play();
  }
  ngInit() {
    this.playAudio();
  }

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(QuoteDisplayComponent, {
      height: "auto",
      width: "auto",
      maxHeight: "90vh",
      maxWidth: "90vw",
      enterAnimationDuration: 2,
      exitAnimationDuration: 2,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The quote dialog was closed')
    })
  }

  goToAboutPage(): void {
    window.location.href = 'https://t2.world/';
  }

}
