import { Component, OnInit } from '@angular/core';
import { AuthorService } from './../author.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit {

  private authors = [];
  constructor(private authorService: AuthorService) {
    this.authorService.getAuthors()
    .subscribe(res => this.authors = res.authors);
  }

  private removeAuthor(author): void {
    this.authorService.removeAuthor(author)
    .subscribe(res => {
      if (res == null) {
        const pos = this.authors.findIndex(a => a._id === author._id);
        this.authors.splice(pos, 1);
      }
    });
  }

  private createdAuthor(author): void {
    this.authors.push(author);
  }

  ngOnInit() { }

}
