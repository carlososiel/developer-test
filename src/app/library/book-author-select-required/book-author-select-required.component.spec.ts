import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorSelectRequiredComponent } from './book-author-select-required.component';

describe('BookAuthorSelectRequiredComponent', () => {
  let component: BookAuthorSelectRequiredComponent;
  let fixture: ComponentFixture<BookAuthorSelectRequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAuthorSelectRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorSelectRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
