import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';


const routes: Routes = [
  { path: 'authors', component: AuthorDetailsComponent },
  { path: 'books', component: BookDetailsComponent },
  { path: 'publishers', component: PublisherDetailsComponent },
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
