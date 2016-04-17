import './app';

describe('squares', () => {
  let squares, scope;
  beforeEach(() => {
    angular.mock.module('squares');
  });

  describe('controller', () => {
    beforeEach(inject(($componentController, $rootScope) => {
      scope = $rootScope.$new();
      squares = $componentController('superbowlSquares', { $scope: scope } );
    }));

    it('has blank defaults', () => {
      expect(squares.dataset).not.toBeDefined();
      expect(squares.data).not.toBeDefined();
      expect(squares.stats).not.toBeDefined();
    });

    it('updates datasets', () => {
      squares.dataset = { id: 'scores' };
      squares.updateDataset();

      expect(squares.data).toEqual(jasmine.any(Array));

      const { min, max } = squares.stats;
      expect(min).toBe(0.04);
      expect(max).toBe(3.8);
    });
  });

  describe('component', () => {
    let el;
    beforeEach(inject(($compile, $rootScope) => {
      scope = $rootScope.$new();
      el = $compile('<superbowl-squares>')(scope);
      squares = el.controller('superbowlSquares');
      scope.$digest();
    }));

    it('changes datasets', () => {
      const options = el.find('select').children();
      let q2 = options[2].value;
      let q3 = options[3].value;
      el.find('select').val(q2).triggerHandler('change');

      const { data, stats } = squares;
      expect(data).toBeDefined();
      expect(stats).toBeDefined();

      el.find('select').val(q3).triggerHandler('change');
      expect(squares.data).not.toEqual(data);
      expect(squares.stats).not.toEqual(stats);
    });

    it('sets show all numbers via checkbox', () => {
      const $allNumbers = angular.element(el[0].querySelector('#allNumbers'));
      $allNumbers.attr('checked', true).triggerHandler('click');
      expect(squares.allNumbers).toBe(true);
    });
  });
});
