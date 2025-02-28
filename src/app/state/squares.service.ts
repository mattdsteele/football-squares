import { Injectable } from '@angular/core';
import { SquaresStore } from './squares.store';
import { ScoresService, Score } from '../football-squares/scores.service';
import { SquaresQuery } from './squares.query';

@Injectable({
  providedIn: 'root'
})
export class SquaresService {
  constructor(private store: SquaresQuery, private scores: ScoresService) {}
  getMinAndMax(data: Score[]) {
    const sortedData = data.map(x => x.outcome).sort((a, b) => a - b);
    const [min, max] = [sortedData[0], sortedData[sortedData.length - 1]];
    const deltas = 6;
    const diff = (max - min) / deltas;
    return { min, max, diff, deltas };
  }

  toggleAlwaysVisible(isChecked: boolean) {
    this.store.update({ showAllNumbers: isChecked });
  }

  updateDataset(quarter: string) {
    const dataset = this.scores.get(quarter);
    const stats = this.getMinAndMax(dataset);
    this.store.update({ quarter, dataset, stats });
  }
}
