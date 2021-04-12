import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDsgheComponent } from './edit-dsghe.component';

describe('EditDsgheComponent', () => {
  let component: EditDsgheComponent;
  let fixture: ComponentFixture<EditDsgheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDsgheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDsgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
