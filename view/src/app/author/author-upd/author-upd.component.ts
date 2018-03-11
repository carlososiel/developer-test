import {Component, OnInit} from '@angular/core';
import {AuthorUpdService} from "./author-upd.services.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-author-upd',
  templateUrl: './author-upd.component.html',
  styleUrls: ['./author-upd.component.css']
})
export class AuthorUpdComponent implements OnInit {

  private author;

  constructor(private authorUpdService: AuthorUpdService, private router: Router, private activeRoute: ActivatedRoute) {
    this.author = {};
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.authorUpdService.get(params.id).subscribe(res => {
        this.author = res;
      });
    });
  }

  save() {
    this.authorUpdService.update(this.author).subscribe(res => {
      if (res.success)
        this.router.navigateByUrl('author');
    });
  }

}
