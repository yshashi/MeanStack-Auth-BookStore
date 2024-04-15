import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  getBooks() {
    return this.http.get<Response<Book[]>>('http://localhost:8800/api/book');
  }
}

export type Book = {
  _id: string;
  title: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export type Response<T> = {
  success: boolean;
  status: number;
  message: string;
  data: T
}
