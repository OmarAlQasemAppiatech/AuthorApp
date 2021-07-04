import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorFormComponent } from './author-details/author-form/author-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-details/book-form/book-form.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { PublisherFormComponent } from './publisher-details/publisher-form/publisher-form.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorDetailsComponent,
    AuthorFormComponent,
    BookDetailsComponent,
    BookFormComponent,
    PublisherDetailsComponent,
    PublisherFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
