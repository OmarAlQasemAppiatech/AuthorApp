export class AuthorDetails {
  id: number = 0;
  name: string = "";
  email: string = "";
  dateOfBirth: Date;
  phoneNumber: string = "";
}
export class BookDetails {
  id: number = 0;
  title: string = "";
  numberOfPages: number = 0;
  dateOfPublish: Date;
  authors: Array<AuthorDetails> = [];
  publisher: number = 0;
}
export class PublisherDetails {
  id: number = 0;
  name: string = "";
  email: string = "";
  address: string = "";
  phoneNumber: string = "";
}
