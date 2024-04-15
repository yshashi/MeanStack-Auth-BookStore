import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input({ required: true }) book!: Book;
}
