import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuperbowlSquaresComponent } from './superbowl-squares.component';
import { ScoresService } from '../scores.service';
import { SquaresService } from 'src/app/state/squares.service';

describe('SuperbowlSquaresComponent', () => {
  let component: SuperbowlSquaresComponent;
  let fixture: ComponentFixture<SuperbowlSquaresComponent>;


  beforeEach(() => {
    fixture = TestBed.createComponent(SuperbowlSquaresComponent);
    TestBed.inject(ScoresService);
    TestBed.inject(SquaresService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
