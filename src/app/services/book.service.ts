import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private listBooks = [
    new Book(1, "The Slight Edge", "Jeff Olsen", new Date("2010/09/09")),
    new Book(2, "Atomic Habits", "James Clear", new Date("2018/02/10")),
    new Book(3, "So Good They Can't ignore you", "Cal Newport", new Date("2015/12/08"))
  ];

  constructor() { }

  getBooks(){
    return [...this.listBooks];
  }
}
