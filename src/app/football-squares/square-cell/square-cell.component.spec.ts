import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SquareCellComponent } from './square-cell.component';

describe('SquareCellComponent', () => {
  let component: SquareCellComponent;
  let fixture: ComponentFixture<SquareCellComponent>;

  beforeEach(waitForAsync(() => {
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
