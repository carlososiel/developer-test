import { Component, OnInit } from '@angular/core';
import {AuthorService} from './author.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [ AuthorService]
})
export class AuthorComponent implements OnInit {

  authors: any;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(data => {
      console.log(data);
      this.authors = data;
    });
  }

}
