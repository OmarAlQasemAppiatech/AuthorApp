import { Component, OnInit } from '@angular/core';
import { AuthorDetails } from '../shared/author-details.model';
import { AuthorDetailsService } from '../shared/author-details.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
})
export class AuthorDetailsComponent implements OnInit {

  constructor(public service: AuthorDetailsService) { }

  ngOnInit(): void {
    this.service.refreshAuthorsList()
  }
  populateForm(selectedRecord: AuthorDetails) {
    this.service.authorFormData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    this.service.deleteAuthor(id)
      .subscribe(
          res => {
            this.service.refreshAuthorsList();
          },
          err => { console.log(err) }
      )
  }
}
