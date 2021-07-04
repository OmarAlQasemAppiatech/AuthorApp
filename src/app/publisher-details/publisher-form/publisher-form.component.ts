import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublisherDetails } from 'src/app/shared/author-details.model';
import { AuthorDetailsService } from 'src/app/shared/author-details.service';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styles: [
  ]
})
export class PublisherFormComponent implements OnInit {

  constructor(public service: AuthorDetailsService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.publisherFormData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postPublisher().subscribe(
      res => {
        this.resetPublisherForm(form);
        this.service.refreshPublishersList();
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPublisher().subscribe(
      res => {
        this.resetPublisherForm(form);
        this.service.refreshPublishersList();
      },
      err => { console.log(err); }
    );
  }
  resetPublisherForm(form: NgForm) {
    form.form.reset();
    this.service.publisherFormData = new PublisherDetails();
  }
}
