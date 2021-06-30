import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorDetails } from '../../shared/author-details.model';
import { AuthorDetailsService } from '../../shared/author-details.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
})
export class AuthorFormComponent implements OnInit {

  constructor(public service: AuthorDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postAuthor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putAuthor().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new AuthorDetails();
  }
}
