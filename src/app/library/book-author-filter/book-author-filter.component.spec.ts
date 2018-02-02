import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorFilterComponent } from './book-author-filter.component';

describe('BookAuthorFilterComponent', () => {
  let component: BookAuthorFilterComponent;
  let fixture: ComponentFixture<BookAuthorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAuthorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
