import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() category = {};
  @Output() removed = new EventEmitter();

  constructor() { }

  private removeCategory(): void {
    this.removed.next(this.category);
  }

  ngOnInit() { }

}
