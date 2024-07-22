import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteService } from './quote.service';

@NgModule({
    declarations: [
        AppComponent,
        QuoteDisplayComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        QuoteDisplayComponent,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        QuoteService,
        //provideHttpClient(withInterceptorsFromDi())
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
