import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategoryFilterComponent } from './book-category-filter.component';

describe('BookCategoryFilterComponent', () => {
  let component: BookCategoryFilterComponent;
  let fixture: ComponentFixture<BookCategoryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCategoryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
