import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UrlFormComponent } from './home/url-form/url-form.component';
import { BookmarkListComponent } from './home/bookmark-list/bookmark-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UrlFormComponent,
    BookmarkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
