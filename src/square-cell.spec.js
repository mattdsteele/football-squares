import './app';
import superbowl from './data/superbowl.json';

describe('square cell', () => {
  let squares, scope;
  beforeEach(() => {
    angular.mock.module('squares');
  });

  describe('controller', () => {
    beforeEach(inject(($componentController, $rootScope) => {
      scope = $rootScope.$new();
      squares = $componentController('squareCell', { $scope: scope } );
    }));

    it('responds to alwaysVisible', () => {
      squares.alwaysVisible = true;
      scope.$digest();

      expect(squares.visible).toBe(true);
    });

    it('shows', () => {
      squares.show();
      expect(squares.visible).toBe(true);
    });

    it('hides', () => {
      squares.alwaysVisible = true;
      squares.hide();
      expect(squares.visible).toBe(true);

      squares.alwaysVisible = false;
      squares.hide();
      expect(squares.visible).toBe(false);
    });

    it('sets a priority level class', () => {
      squares.dataset = superbowl;
      squares.stats = { min: 0, max: 12, diff: 2, deltas: 6 };
      squares.home = 0;
      squares.away = 3;
      scope.$digest();
      expect(squares.priorityLevel).toBe('priority-level-2');
    });
  });

  describe('component', () => {
    let el;
    beforeEach(inject(($compile, $rootScope) => {
      scope = $rootScope.$new();
      scope.stats = { min: 0, max: 12, diff: 2, deltas: 6 };

      el = $compile('<square-cell home="0" away="3" stats="stats" dataset="superbowl" always-visible="alwaysVisible">')(scope);

      scope.superbowl = superbowl;
      scope.alwaysVisible = false;
      scope.$digest();
    }));

    it('is triggered on mouse events', () => {
      el.find('div').triggerHandler('mouseenter');
      scope.$digest();
      expect(el.text()).toBe('2.22');

      el.find('div').triggerHandler('mouseleave');
      scope.$digest();
      expect(el.text()).toBe('');
    });

    it('shows when told to always show', () => {
      scope.alwaysVisible = true;
      scope.$digest();

      expect(el.text()).toBe('2.22');
    });
  });
});
