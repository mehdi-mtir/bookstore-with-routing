import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  listBooks : Book[] = [];

  constructor(private bookService : BookService) { }


  addBook(book : Book){
    this.listBooks = [...this.listBooks, book];
  }

  deleteBook(id : number){
    if(confirm("Etes-vous sûre de vouloir supprimer le livre?")){
      this.listBooks = this.listBooks.filter(
        (book)=>book.id!==id
      )
    }
  }

  ngOnInit(): void {
    this.listBooks = this.bookService.getBooks();
  }



}
