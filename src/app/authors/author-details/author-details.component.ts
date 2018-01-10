import { Component, OnInit, Input} from '@angular/core';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  @Input()
  author: Author;

  @Input()
  createHandler: Function

  @Input()
  updateHandler: Function

  @Input()
  deleteHandler: Function

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  createAuthor(author: Author) {
    this.authorService.createAuthor(author)
      .then((newAuthor: Author) => {
        this.createHandler(newAuthor)
      })
  }
  updateAuthor(author: Author) {
    this.authorService.updateAuthor(author)
      .then((updateAuthor: Author) => {
        this.updateHandler(updateAuthor)
      })
  }
  deleteAuthor(authorId: String) {
    this.authorService.deleteAuthor(authorId)
      .then((msg: String) => {
        this.deleteHandler(authorId)
      })
  }


}
