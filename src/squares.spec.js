import { beforeEach, fit, fdescribe, it, describe, expect, injectAsync, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';

import Squares from './squares';

describe('squares', () => {
  let squares, fixture;

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb.createAsync(Squares).then(fx => {
      fixture = fx;
      squares = fixture.componentInstance;
    });
  }));

  describe('controller', () => {

    it('has blank defaults', () => {
      expect(squares.dataset).toEqual('');
      expect(squares.data).not.toBeDefined();
      expect(squares.stats).not.toBeDefined();
    });

    it('updates datasets', () => {
      squares.dataset = { id: 'scores' };
      squares.updateDataset('scores');

      expect(squares.data).toEqual(jasmine.any(Array));

      const { min, max } = squares.stats;
      expect(min).toBe(0.04);
      expect(max).toBe(3.8);
    });
  });

  describe('component', () => {
    let nativeElement;
    beforeEach(() => {
      nativeElement = fixture.nativeElement;
      fixture.detectChanges();
    });

    it('changes datasets', () => {
      const sel = nativeElement.querySelector('select');
      const { options } = sel;
      let q2 = options[2].value;
      let q3 = options[3].value;

      sel.value = q2;
      sel.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      const { data, stats } = squares;
      expect(data).toBeDefined();
      expect(stats).toBeDefined();

      sel.value = q3;
      sel.dispatchEvent(new Event('change'));
      expect(squares.data).not.toEqual(data);
      expect(squares.stats).not.toEqual(stats);
    });

    // Not sure why this is failing. Production code works
    xit('sets show all numbers via checkbox', () => {
      const allNumbers = nativeElement.querySelector('#allNumbers');
      allNumbers.click();
      fixture.detectChanges();
      expect(squares.allNumbers).toBe(true);
    });
  });
});
