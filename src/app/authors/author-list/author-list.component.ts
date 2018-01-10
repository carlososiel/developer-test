import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [AuthorService]
})
export class AuthorListComponent implements OnInit {

  authors: Author[]
  selectedAuthor: Author

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors()
      .then((authors: Author[]) => {
        this.authors = authors
      })
  }

  private getIndexOfAuthor = (authorId: String) => {
    return this.authors.findIndex((author) => {
      return author._id === authorId;
    });
  }

  selectAuthor(author: Author) {
    this.selectedAuthor = author
  }

  createNewAuthor() {
    var author: Author = {
      first_name: '',
      last_name: '',
    }
    this.selectedAuthor = author
  }

  deleteAuthor = (authorId: String) => {
    var idx = this.getIndexOfAuthor(authorId)
    if (idx !== -1) {
      this.authors.splice(idx, 1)
      this.selectAuthor(null)
    }
    return this.authors
  }

  addAuthor = (author: Author) => {
    this.authors.push(author)
    this.selectAuthor(author)
    return this.authors
  }

  updateAuthor = (author: Author) => {
    var idx = this.getIndexOfAuthor(author._id)  
    if (idx !== -1) {
      this.authors[idx] = author
      this.selectAuthor(author)
    }
    return this.authors
  }

}
