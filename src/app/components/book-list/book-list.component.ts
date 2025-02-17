import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
