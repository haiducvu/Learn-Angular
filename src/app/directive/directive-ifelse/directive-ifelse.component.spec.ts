import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveIfelseComponent } from './directive-ifelse.component';

describe('DirectiveIfelseComponent', () => {
  let component: DirectiveIfelseComponent;
  let fixture: ComponentFixture<DirectiveIfelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveIfelseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveIfelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
