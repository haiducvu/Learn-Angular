import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShoppingComponent } from './header-shopping.component';

describe('HeaderShoppingComponent', () => {
  let component: HeaderShoppingComponent;
  let fixture: ComponentFixture<HeaderShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
