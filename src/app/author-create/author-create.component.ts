import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {AuthorService} from '../author/author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css'],
  providers: [ AuthorService],
  encapsulation: ViewEncapsulation.None
})
export class AuthorCreateComponent implements OnInit {
  author= { };

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }
  saveAuthor() {
    this.authorService.createAuthor(this.author)
      .subscribe(res => {
          this.router.navigate(['/authors']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
