import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthorService} from '../author/author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css'],
  providers: [ AuthorService],
  encapsulation: ViewEncapsulation.None
})
export class AuthorEditComponent implements OnInit {

  author: any = {};

  constructor(private authorService: AuthorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor(this.route.snapshot.params['id']);
  }

  getAuthor(id) {
    this.authorService.detailAuthor(id).subscribe(data => {
      this.author = data;
    });
  }

  updateAuthor(id) {
    this.authorService.updateAuthor( id, this.author)
      .subscribe(res => {
          this.router.navigate(['/authors']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
