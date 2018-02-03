import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() author = {};
  @Output() removed = new EventEmitter();

  constructor() { }

  private removeAuthor(): void {
    this.removed.next(this.author);
  }

  ngOnInit() { }

}
