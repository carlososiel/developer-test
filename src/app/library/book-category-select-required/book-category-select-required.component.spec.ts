import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategorySelectRequiredComponent } from './book-category-select-required.component';

describe('BookCategorySelectRequiredComponent', () => {
  let component: BookCategorySelectRequiredComponent;
  let fixture: ComponentFixture<BookCategorySelectRequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCategorySelectRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCategorySelectRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
