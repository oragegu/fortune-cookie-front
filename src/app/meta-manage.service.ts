import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaManageService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'twitter:description', content: desc });
  }

  updateTwitterImage(imageUrl: string) {
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
