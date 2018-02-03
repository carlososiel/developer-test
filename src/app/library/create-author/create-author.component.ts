import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorService } from './../author.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  private nameControl = new FormControl('', [Validators.required]);
  private lastNameControl = new FormControl('', [Validators.required]);
  private author = {
    name: '',
    lastName: ''
  };
  private fullForm = false;
  @Output() created = new EventEmitter();

  constructor(private authorService: AuthorService) { }

  private toggleForm(value: boolean): void {
    this.fullForm = value;
  }

  private cancel(): void {
    this.toggleForm(false);
    this.reset();
  }

  private reset(): void {
    this.author = {
      name: '',
      lastName: ''
    };

    this.nameControl.reset();
    this.lastNameControl.reset();
  }

  private create(): void {
    if (this.validForm()) {
      this.authorService.createAuthor(this.author)
      .subscribe(res => {
        if (res.author !== undefined) {
          this.reset();
          this.toggleForm(false);
          this.created.next(res.author);
        }
      });
    }
  }

  private validForm(): boolean {
    return this.nameControl.valid && this.lastNameControl.valid;
  }

  ngOnInit() { }

}
