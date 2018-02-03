import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BookService } from './../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  private titleControl = new FormControl('', [Validators.required]);
  private descriptionControl = new FormControl('', [Validators.required]);
  private priceControl = new FormControl('', [Validators.required]);
  private book = {
    title: '',
    description: '',
    price: '',
    author: '',
    category: ''
  };
  private fullForm = false;
  @Output() created = new EventEmitter();

  constructor(private bookService: BookService) { }

  private toggleForm(value: boolean): void {
    this.fullForm = value;
  }

  private cancel(): void {
    this.toggleForm(false);
    this.reset();
  }

  private reset(): void {
    this.book = {
      title: '',
      description: '',
      price: '',
      author: '',
      category: ''
    };

    this.titleControl.reset();
    this.descriptionControl.reset();
    this.priceControl.reset();
  }

  private categoryChanged(category: string): void {
    this.book.category = category ? category : '';
  }

  private authorChanged(author: string): void {
    this.book.author = author ? author : '';
  }

  private create(): void {
    if (this.validForm()) {
      this.bookService.createBook(this.book)
      .subscribe(res => {
        if (res.book !== undefined) {
          this.reset();
          this.toggleForm(false);
          this.created.next(res.book);
        }
      });
    }
  }

  private validForm(): boolean {
    return this.titleControl.valid
      && this.descriptionControl.valid
      && this.priceControl.valid
      && (this.book.author !== '')
      && (this.book.category !== '');
  }

  ngOnInit() { }

}
