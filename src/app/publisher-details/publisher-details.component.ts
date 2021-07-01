import { Component, OnInit } from '@angular/core';
import { PublisherDetails } from '../shared/author-details.model';
import { AuthorDetailsService } from '../shared/author-details.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styles: [
  ]
})
export class PublisherDetailsComponent implements OnInit {

  constructor(public service: AuthorDetailsService) { }

  ngOnInit(): void {
    this.service.refreshPublishersList()
  }
  populateForm(selectedRecord: PublisherDetails) {
    this.service.publisherFormData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    this.service.deletePublisher(id)
      .subscribe(
          res => {
            this.service.refreshPublishersList();
          },
          err => { console.log(err) }
      )
  }
}
