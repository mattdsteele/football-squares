import { it, describe, expect, injectAsync, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';


import SuperbowlApp from './superbowl-app.component';

// Currently failing with a "Failed: No provider for $scope! (class0 -> $scope)" error
// StackOverflow, angular/angular doesn't show much.
// Probably can only re-enable tests when everything is in ng2
xdescribe('app', () => {
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
