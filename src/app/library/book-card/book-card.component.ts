import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book = {};
  @Output() removed = new EventEmitter();

  constructor() { }

  private removeBook(): void {
    this.removed.next(this.book);
  }

  ngOnInit() { }

}
