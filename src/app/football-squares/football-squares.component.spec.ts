import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballSquaresComponent } from './football-squares.component';

describe('FootballSquaresComponent', () => {
  let component: FootballSquaresComponent;
  let fixture: ComponentFixture<FootballSquaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballSquaresComponent ]
    })
    .compileComponents();
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
