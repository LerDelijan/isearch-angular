import { HttpClientModule }    from '@angular/common/http';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule }       from '@angular/core';

import { AppComponent } from './app.component';
import { ItemSearchComponent } from './item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
