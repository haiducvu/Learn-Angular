import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeTranhChuComponent } from './coffee-tranh-chu.component';

describe('CoffeeTranhChuComponent', () => {
  let component: CoffeeTranhChuComponent;
  let fixture: ComponentFixture<CoffeeTranhChuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeTranhChuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeTranhChuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
