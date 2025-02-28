import { Injectable } from '@angular/core';
import { Score } from '../football-squares/scores.service';
import { BehaviorSubject, ObjectUnsubscribedError } from 'rxjs';

export interface SquaresState {
  quarter: string;
  dataset: Score[];
  stats: { min: any; max: any; diff: number; deltas: number };
  showAllNumbers: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SquaresQuery {
  quarter = new BehaviorSubject<string>('');
  dataset = new BehaviorSubject<Score[]>([]);
  stats = new BehaviorSubject<{ min: any; max: any; diff: number; deltas: number }>(null);
  showAllNumbers = new BehaviorSubject<boolean>(false);

  scores$ = this.dataset.asObservable();
  quarter$ = this.quarter.asObservable();
  stats$ = this.stats.asObservable();
  showAllNumbers$ = this.showAllNumbers.asObservable();

  updateShowAllNumbers(showAllNumbers: boolean) {
    this.showAllNumbers.next(showAllNumbers);
  }
  update({dataset, quarter, stats}: Partial<SquaresState>) {
    this.dataset.next(dataset);
    this.quarter.next(quarter);
    this.stats.next(stats);
  }
}
