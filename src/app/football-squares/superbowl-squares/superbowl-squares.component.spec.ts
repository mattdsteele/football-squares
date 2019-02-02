import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperbowlSquaresComponent } from './superbowl-squares.component';

describe('SuperbowlSquaresComponent', () => {
  let component: SuperbowlSquaresComponent;
  let fixture: ComponentFixture<SuperbowlSquaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuperbowlSquaresComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperbowlSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
