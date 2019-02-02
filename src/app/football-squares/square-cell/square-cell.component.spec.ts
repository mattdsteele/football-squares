import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCellComponent } from './square-cell.component';

describe('SquareCellComponent', () => {
  let component: SquareCellComponent;
  let fixture: ComponentFixture<SquareCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SquareCellComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
