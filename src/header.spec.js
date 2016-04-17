import './header';

describe('header', () => {
  let el;
  beforeEach(() => {
    angular.mock.module('header');
  });
  beforeEach(inject(($compile, $rootScope) => {
    el = $compile(`<superbowl-header>
                    <lede>A sample lede</lede>
                    <subhead>A sub header</subhead>
                  </superbowl-header>`)($rootScope.$new());
  }));
  it('sets the lede', () => {
    expect(el[0].querySelector('.header-1').textContent).toBe('A sample lede');
  });

  it('sets the subhead', () => {
    expect(el[0].querySelector('.header-2').textContent).toBe('A sub header');
  });
});
