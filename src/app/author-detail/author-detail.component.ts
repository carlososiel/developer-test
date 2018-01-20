import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthorService} from '../author/author.service';


@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
  providers: [ AuthorService],
  encapsulation: ViewEncapsulation.None
})
export class AuthorDetailComponent implements OnInit {
  author = { };

  constructor(private router: Router, private route: ActivatedRoute, private authorService: AuthorService) {  }

  ngOnInit() {
    this.getAuthorDetails(this.route.snapshot.params['id']);
  }
  getAuthorDetails(id) {
    this.authorService.detailAuthor(id).subscribe(data => {
      this.author = data;
    });
  }
  deleteAuthor(id) {
    this.authorService.deleteAuthor(id)
      .subscribe(res => {
          this.router.navigate(['/authors']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
