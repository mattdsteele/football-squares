import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SquaresState, SquaresStore } from './squares.store';

@Injectable({
  providedIn: 'root'
})
export class SquaresQuery extends Query<SquaresState> {
  constructor(protected store: SquaresStore) {
    super(store);
  }
  scores$ = this.select(s => s.dataset);
  quarter$ = this.select(s => s.quarter);
  stats$ = this.select(s => s.stats);
  showAllNumbers$ = this.select(s => s.showAllNumbers);
}
