import Datasets from './datasets';

describe('datasets', () => {
  let datasets;
  beforeEach(() => {
    datasets = new Datasets();
  });

  it('has a datasets object', () => {
    expect(datasets.datasets).toEqual(jasmine.any(Array));
  });

  it('has specific values', () => {
    const last = datasets.datasets[4];
    const { id, name } = last;
    expect(id).toBe('scores');
    expect(name).toBe('All Games');
  });
});
