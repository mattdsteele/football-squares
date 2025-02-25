import { TestBed, inject } from '@angular/core/testing';

import { Datasets} from './datasets.service';

describe('DatasetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Datasets]
    });
  });

  it('should be created', inject(
    [Datasets],
    (service: Datasets) => {
      expect(service).toBeTruthy();
    }
  ));
});
