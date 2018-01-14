import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorUpdComponent } from './author-upd.component';

describe('AuthorUpdComponent', () => {
  let component: AuthorUpdComponent;
  let fixture: ComponentFixture<AuthorUpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorUpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorUpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
