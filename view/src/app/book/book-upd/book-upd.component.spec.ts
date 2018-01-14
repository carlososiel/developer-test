import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUpdComponent } from './book-upd.component';

describe('BookUpdComponent', () => {
  let component: BookUpdComponent;
  let fixture: ComponentFixture<BookUpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
