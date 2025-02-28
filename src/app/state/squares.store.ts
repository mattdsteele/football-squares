import { Injectable } from '@angular/core';
import { Score } from '../football-squares/scores.service';
export interface SquaresState {
  quarter: string;
  dataset: Score[];
  stats: { min: any; max: any; diff: number; deltas: number };
  showAllNumbers: boolean;
}
export const createInitialState = (): SquaresState => {
  return {
    quarter: '',
    dataset: [],
    stats: null,
    showAllNumbers: false
  };
};

@Injectable({ providedIn: 'root' })
export class SquaresStore {
  constructor() {
    createInitialState();
  }
}
