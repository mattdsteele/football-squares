import { TestBed, inject } from '@angular/core/testing';

import { ScoresService } from './scores.service';

describe('ScoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoresService]
    });
  });

  it('should be created', inject([ScoresService], (service: ScoresService) => {
    expect(service).toBeTruthy();
  }));
});
