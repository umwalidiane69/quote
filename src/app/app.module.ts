import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDescrComponent } from './quote-descr/quote-descr.component';
import { VotesDirective } from './votes.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [ 
    AppComponent,
    QuoteComponent,
    QuoteDescrComponent,
    VotesDirective,
    DateCountPipe,
    QuoteFormComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
