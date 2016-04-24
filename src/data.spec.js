import Data from './data';

// We are testing this component directly, rather than through Angular
// See http://stackoverflow.com/q/36827715/27557 for details
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
