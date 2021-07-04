import { Injectable } from '@angular/core';
import { AuthorDetails, AuthorResource, BookDetails, BookResource, PublisherDetails, PublisherResource } from './author-details.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailsService {

  constructor(private http: HttpClient) { }

  readonly authorURL = 'https://localhost:5001/api/author'
  readonly bookURL = 'https://localhost:5001/api/book'
  readonly publisherURL = 'https://localhost:5001/api/publisher'



  authorFormData: AuthorDetails = new AuthorDetails()
  bookFormData: BookDetails = new BookDetails()
  publisherFormData: PublisherDetails = new PublisherDetails()


  booksList: BookResource[];
  authorsList: AuthorResource[];
  publishersList: PublisherResource[];


  //Add New Author
  postAuthor() {
    return this.http.post(this.authorURL, this.authorFormData);
  }
  //Update An Author
  putAuthor() {
    return this.http.put(`${this.authorURL}/${this.authorFormData.id}`, this.authorFormData);
  }
  //Delete An Author
  deleteAuthor(id: number) {
    return this.http.delete(`${this.authorURL}/${id}`);
  }
  // Get Author By Id 
  getAuthor(id: number) {
    return this.http.get(`${this.authorURL}/${id}`);
  }

  //Add New Book
  postBook() {
    return this.http.post(this.bookURL, this.bookFormData);
  }
  //Update A Book
  putBook() {
    return this.http.put(`${this.bookURL}/${this.bookFormData.id}`, this.bookFormData);
  }
  //Delete A Book
  deleteBook(id: number) {
    return this.http.delete(`${this.bookURL}/${id}`);
  }
  // Get Book By Id 
  getBook(id: number) {
    return this.http.get(`${this.bookURL}/${id}`);
  }

  //Add New Publisher
  postPublisher() {
    return this.http.post(this.publisherURL, this.publisherFormData);
  }
  //Update A Publisher
  putPublisher() {
    return this.http.put(`${this.publisherURL}/${this.publisherFormData.id}`, this.publisherFormData);
  }
  //Delete A Publisher
  deletePublisher(id: number) {
    return this.http.delete(`${this.publisherURL}/${id}`);
  }
  // Get Publisher By Id 
  getPublisher(id: number) {
    return this.http.get(`${this.publisherURL}/${id}`);
  }


  refreshAuthorsList() {
    this.http.get(this.authorURL)
      .toPromise()
      .then(res => { this.authorsList = res as AuthorResource[]; });
  }
  refreshBooksList() {
    this.http.get(this.bookURL)
      .toPromise()
      .then(res => this.booksList = res as BookResource[]);
  }
  refreshPublishersList() {
    this.http.get(this.publisherURL)
      .toPromise()
      .then(res => { this.publishersList = res as PublisherResource[]; });
  }
}
