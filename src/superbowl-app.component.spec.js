import { it, describe, expect, injectAsync, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';


import SuperbowlApp from './superbowl-app.component';

describe('app', () => {
  let el;

  it('sets the header', injectAsync([TestComponentBuilder], tcb => {
    return tcb.createAsync(SuperbowlApp).then(fixture => {
      const el = fixture.nativeElement;
      expect(el.querySelector('superbowl-header')).toBeDefined();
    });
  }));

  it('sets the squares', injectAsync([TestComponentBuilder], tcb => {
    return tcb.createAsync(SuperbowlApp).then(fixture => {
      const el = fixture.nativeElement;
      expect(el.querySelector('superbowl-squares')).toBeDefined();
    });
  }));
});
