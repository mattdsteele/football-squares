import Header from './header';

import { Component } from 'angular2/core';

// We create a test component so we can transclude/project data into it
// See http://stackoverflow.com/q/36464992/27557
@Component({
  directives: [Header],
  template: `
              <superbowl-header>
                <header-lede>A sample lede</header-lede>
                <header-subhead>A sub header</header-subhead>
              </superbowl-header>
            `
})
class TestHeader {
}

import { it, describe, expect, inject, async, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';

describe('header', () => {
  let el;
  it('sets the lede', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(TestHeader).then(fixture => {
      const el = fixture.nativeElement;
      expect(el.querySelector('header-lede').textContent).toBe('A sample lede');
    });
  })));

  it('sets the subhead', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(TestHeader).then(fixture => {
      expect(fixture.nativeElement.querySelector('header-subhead').textContent).toBe('A sub header');
    });
  })));
});
