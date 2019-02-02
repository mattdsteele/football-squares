import { TestBed } from '@angular/core/testing';

import { SquaresService } from './squares.service';

describe('SquaresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SquaresService = TestBed.get(SquaresService);
    expect(service).toBeTruthy();
  });
});
