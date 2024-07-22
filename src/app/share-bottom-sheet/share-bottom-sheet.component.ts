import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'share-bottom-sheet',
  templateUrl: './share-bottom-sheet.component.html',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
})
export class ShareBottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewSheet);
  }
}

@Component({
  selector: 'share-bottom-sheet',
  templateUrl: './share-bottom-sheet.component.html',
  standalone: true,
  imports: [MatListModule],
})
export class BottomSheetOverviewSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
