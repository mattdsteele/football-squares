import './app';

// See http://stackoverflow.com/q/36827715/27557 for details
xdescribe('app', () => {
  let el;
  beforeEach(() => {
    angular.mock.module('squares');
  });
  beforeEach(inject(($compile, $rootScope) => {
    el = $compile(`<superbowl-app></superbowl-app>`)($rootScope.$new());
  }));
  it('sets the header', () => {
    expect(el[0].querySelector('superbowl-header')).toBeDefined();
  });

  it('sets the squares', () => {
    expect(el[0].querySelector('superbowl-squares')).toBeDefined();
  });
});
