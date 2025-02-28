import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FootballSquaresComponent } from './football-squares.component';

describe('FootballSquaresComponent', () => {
  let component: FootballSquaresComponent;
  let fixture: ComponentFixture<FootballSquaresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FootballSquaresComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
