import Data from './data';

describe('square cell', () => {
  let data;
  beforeEach(() => {
    data = new Data();
  });
  it('provides data', () => {
    const q1 = data.get('quarter1');
    expect(q1).toEqual(jasmine.any(Array));
  });

  it('returns undefined values', () => {
    expect(data.get('BAD')).not.toBeDefined();
  });
});
