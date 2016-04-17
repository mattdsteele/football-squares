import './app';

describe('datasets', () => {
  let datasets;
  beforeEach(() => {
    angular.mock.module('squares');
  });

  beforeEach(inject((Datasets) => {
    datasets = Datasets;
  }));

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
