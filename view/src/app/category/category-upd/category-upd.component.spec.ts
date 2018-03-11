import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUpdComponent } from './category-upd.component';

describe('CategoryUpdComponent', () => {
  let component: CategoryUpdComponent;
  let fixture: ComponentFixture<CategoryUpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryUpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
