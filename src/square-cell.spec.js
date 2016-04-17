import './app';

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
  });
});
