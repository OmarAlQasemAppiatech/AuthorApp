import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorFormComponent } from './author-details/author-form/author-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthorDetailsComponent,
    AuthorFormComponent
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
