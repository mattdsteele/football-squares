import './app';

describe('square cell', () => {
  let data;
  beforeEach(() => {
    angular.mock.module('squares');
  });
  beforeEach(inject((Data) => {
    data = Data;
  }));
  it('provides data', () => {
    const q1 = data.get('quarter1');
    expect(q1).toEqual(jasmine.any(Array));
  });

  it('returns undefined values', () => {
    expect(data.get('BAD')).not.toBeDefined();
  });
});
