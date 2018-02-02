import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {

  private category: string;

  private author: string;

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      const queryParams = this.routerParams.snapshot.queryParams;
      this.category = queryParams['category'] ? queryParams['category'] : '';
      this.author = queryParams['author'] ? queryParams['author'] : '';
    }

    private changeCategory(category: string): void {
      this.category = category;
    }

    private changeAuthor(author: string): void {
      this.author = author;
    }

    private navigate(): void {
      const params = {};
      if (this.category) {
        params['category'] = this.category;
      }
      if (this.author) {
        params['author'] = this.author;
      }
      this.router.navigate(['library'], {queryParams: params});
    }

  ngOnInit() { }

}
