import {Component, OnInit} from '@angular/core';
import {AuthorAddService} from "./author-add.services.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  private author;

  constructor(private authorAddService: AuthorAddService, private router: Router) {
    this.author = {};
  }

  ngOnInit() {
  }

  save() {
    this.authorAddService.store(this.author).subscribe(resp => {
      this.router.navigateByUrl('author');
    });
  }

}
