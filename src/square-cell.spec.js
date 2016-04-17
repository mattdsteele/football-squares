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
});
