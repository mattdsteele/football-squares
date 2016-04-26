import { beforeEach, fit, fdescribe, async, it, describe, expect, inject, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';

import SquareCell from './square-cell';
import superbowl from './data/superbowl.json';

describe('square cell', () => {
  let squares, fixture;

  beforeEach(async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(SquareCell).then(fx => {
      fixture = fx;
      squares = fixture.componentInstance;
    });
  })));

  describe('controller', () => {
    
    it('responds to alwaysVisible', () => {
      squares.alwaysVisible = true;
      fixture.detectChanges();
      expect(squares.visible()).toBe(true);
    });

    it('shows', () => {
      squares.show();
      expect(squares.visible()).toBe(true);
    });

    it('hides', () => {
      squares.alwaysVisible = true;
      squares.hide();
      expect(squares.visible()).toBe(true);

      squares.alwaysVisible = false;
      squares.hide();
      expect(squares.visible()).toBe(false);
    });

    it('sets a priority level class', () => {
      squares.scoreData = superbowl;
      squares.stats = { min: 0, max: 12, diff: 2, deltas: 6 };
      squares.home = 0;
      squares.away = 3;
      expect(squares.priorityLevel()).toBe('priority-level-2');
    });
  });

  describe('component', () => {
    let nativeElement;
    const stats = { min: 0, max: 12, diff: 2, deltas: 6 };

    beforeEach(() => {
      // populate data
      squares.home = 0;
      squares.away = 3;
      squares.stats = stats;
      squares.scoreData = superbowl;
      squares.alwaysVisible = false;

      // grab native element
      nativeElement = fixture.nativeElement;
    });

    it('is triggered on mouse events', () => {
      const innerDiv = nativeElement.querySelector('div');
      innerDiv.dispatchEvent(new Event('mouseenter'));
      fixture.detectChanges();
      expect(nativeElement.textContent.trim()).toBe('2.22');

      innerDiv.dispatchEvent(new Event('mouseleave'));
      fixture.detectChanges();
      expect(nativeElement.textContent.trim()).toBe('');
    });

    it('shows when told to always show', () => {
      squares.alwaysVisible = true;
      fixture.detectChanges();

      expect(nativeElement.textContent.trim()).toBe('2.22');
    });
  });
});
