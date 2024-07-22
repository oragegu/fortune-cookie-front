import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { QuotePageComponent } from './quote-page/quote-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'quote/:id', component: QuotePageComponent },
    { path: '**', redirectTo: '/' }
];

