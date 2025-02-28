import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuperbowlSquaresComponent } from './superbowl-squares.component';

describe('SuperbowlSquaresComponent', () => {
  let component: SuperbowlSquaresComponent;
  let fixture: ComponentFixture<SuperbowlSquaresComponent>;

  beforeEach(waitForAsync(() => {
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
