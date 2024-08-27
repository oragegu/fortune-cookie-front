import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloadService {
  private preloadedImages: { [key: string]: HTMLImageElement } = {};

  preloadImage(src: string): void {
    if (!this.preloadedImages[src]) {
      const img = new Image();
      img.src = src;
      this.preloadedImages[src] = img;
    }
  }

  getPreloadedImage(src: string): HTMLImageElement | null {
    return this.preloadedImages[src] || null;
  }
}
