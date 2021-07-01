import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookDetails } from 'src/app/shared/author-details.model';
import { AuthorDetailsService } from 'src/app/shared/author-details.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: [
  ]
})
export class BookFormComponent implements OnInit {

  constructor(public service: AuthorDetailsService) { }

  ngOnInit(): void {
    this.service.refreshAuthorsList();
    this.service.refreshPublishersList()
  }
  onSubmit(form: NgForm) {
    if (this.service.bookFormData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postBook().subscribe(
      res => {
        this.resetBookForm(form);
        this.service.refreshBooksList();
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putBook().subscribe(
      res => {
        this.resetBookForm(form);
        this.service.refreshBooksList();
      },
      err => { console.log(err); }
    );
  }
  resetBookForm(form: NgForm) {
    form.form.reset();
    this.service.bookFormData = new BookDetails();
  }
}
