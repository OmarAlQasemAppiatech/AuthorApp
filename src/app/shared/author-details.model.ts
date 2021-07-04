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
  authorsIds: Array<number> = [];
  publisherId: number;
}
export class PublisherDetails {
  id: number = 0;
  name: string = "";
  email: string = "";
  address: string = "";
  phoneNumber: string = "";
}
export class AuthorResource {
  id: number = 0;
  name: string = "";
  email: string = "";
  dateOfBirth: Date;
  phoneNumber: string = "";
  age: number = 0;
}
export class BookResource {
  id: number;
  title: string;
  numberOfPages: number;
  dateOfPublish: Date;
  authors: Array<AuthorResource>;
  publisher: PublisherResource;
  authorsIds: Array<number>;
  publisherId: number;
}
export class PublisherResource {
  id: number = 0;
  name: string = "";
  email: string = "";
  address: string = "";
  phoneNumber: string = "";
}