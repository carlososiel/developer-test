import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book-author-filter',
  templateUrl: './book-author-filter.component.html',
  styleUrls: ['./book-author-filter.component.css']
})
export class BookAuthorFilterComponent implements OnInit {

  @Input() author: string;
  @Output() authorChanged = new EventEmitter();
  private authors = [];

  constructor(private authorService: AuthorService) {
    this.authorService.getAuthors()
    .subscribe(res => this.authors = res.authors);
   }

   private changeAuthor(): void {
    this.authorChanged.next(this.author);
  }

  ngOnInit() { }

}
