import { Injectable } from '@angular/core';
import { AuthorDetails } from './author-details.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailsService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/author'
  formData: AuthorDetails = new AuthorDetails()
  list: AuthorDetails[];

  postAuthor() {
    return this.http.post(this.baseURL, this.formData);
  }
  putAuthor() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }
  deleteAuthor(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as AuthorDetails[]);
  }
}
