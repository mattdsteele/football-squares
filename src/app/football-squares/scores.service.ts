import { Injectable } from '@angular/core';

export interface Score {
  home: number;
  away: number;
  outcome: number;
}

import quarter1 from '../data/quarter1';
import quarter2 from '../data/quarter2';
import quarter3 from '../data/quarter3';
import superbowl from '../data/superbowl';
import scores from '../data/scores';

let mappings = {
  quarter1,
  quarter2,
  quarter3,
  superbowl,
  scores
};

@Injectable()
export class ScoresService {
  get(dataset: string): Score {
    return mappings[dataset];
  }
}
