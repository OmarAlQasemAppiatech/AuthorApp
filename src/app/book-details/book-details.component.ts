import { Component, OnInit } from '@angular/core';
import { BookDetails, BookResource } from '../shared/author-details.model';
import { AuthorDetailsService } from '../shared/author-details.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {

  constructor(public service: AuthorDetailsService) { }

  ngOnInit(): void {
    this.service.refreshBooksList()
  }
  populateForm(selectedRecord: BookResource) {
    this.service.bookFormData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    this.service.deleteBook(id)
      .subscribe(
        res => {
          this.service.refreshBooksList();
        },
        err => { console.log(err) }
      )
  }
}
