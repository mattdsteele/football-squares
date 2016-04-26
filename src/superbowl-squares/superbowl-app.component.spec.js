import { it, describe, expect, inject, async, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';


import SuperbowlApp from './superbowl-app.component';

describe('app', () => {
  it('sets the header', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(SuperbowlApp).then(fixture => {
      const el = fixture.nativeElement;
      expect(el.querySelector('superbowl-header')).toBeDefined();
    });
  })));

  it('sets the squares', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(SuperbowlApp).then(fixture => {
      const el = fixture.nativeElement;
      expect(el.querySelector('superbowl-squares')).toBeDefined();
    });
  })));
});
