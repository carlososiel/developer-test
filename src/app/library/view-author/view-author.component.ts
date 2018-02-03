import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from './../author.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {
  private nameControl = new FormControl('', [Validators.required]);
  private lastNameControl = new FormControl('', [Validators.required]);
  private id: String;
  private author = null;

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private authorService: AuthorService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.routerParams.snapshot.params['id'];
    this.authorService.getById(this.id)
    .subscribe(res => {
      if (res.author !== undefined) {
        this.author = res.author;
      }
    });
  }

  private update(): void {
    if (this.validForm()) {
      this.authorService.updateAuthor(this.author)
      .subscribe(res => {
        if (res.author !== undefined) {
          this.router.navigate(['authors']);
        }
      });
    }
  }

  private validForm(): boolean {
    return this.nameControl.valid && this.lastNameControl.valid;
  }

  ngOnInit() { }

}
