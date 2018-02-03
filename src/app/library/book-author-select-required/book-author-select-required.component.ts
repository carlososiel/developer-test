import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-book-author-select-required',
  templateUrl: './book-author-select-required.component.html',
  styleUrls: ['./book-author-select-required.component.css']
})
export class BookAuthorSelectRequiredComponent implements OnInit {
  private authorControl = new FormControl('', [Validators.required]);
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

  ngOnInit() {
    if (this.author) {
      this.authorControl.setValue(this.author);
    }
  }

}
