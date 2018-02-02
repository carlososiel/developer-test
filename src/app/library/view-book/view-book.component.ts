import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { BookService } from './../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  private titleControl = new FormControl('', [Validators.required]);
  private descriptionControl = new FormControl('', [Validators.required]);
  private priceControl = new FormControl('', [Validators.required]);
  private id: String;
  private book = null;

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private bookService: BookService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.routerParams.snapshot.params['id'];
    this.bookService.getById(this.id)
    .subscribe(res => {
      if (res.book !== undefined) {
        this.book = res.book;
      }
    });
  }

  private update(): void {
    if (this.validForm()) {
      this.bookService.updateBook(this.book)
      .subscribe(res => {
        if (res.book !== undefined) {
          this.router.navigate(['books']);
        }
      });
    }
  }

  private validForm(): boolean {
    return this.titleControl.valid
      && this.descriptionControl.valid
      && this.priceControl.valid
      && (this.book['author'] !== '' && this.book['author'] !== undefined)
      && (this.book['category'] !== '' && this.book['category'] !== undefined);
  }

  private categoryChanged(category: string): void {
    this.book['category'] = category ? category : '';
  }

  private authorChanged(author: string): void {
    this.book['author'] = author ? author : '';
  }

  ngOnInit() { }

}
