import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SquaresState, SquaresStore } from './squares.store';

@Injectable({
  providedIn: 'root'
})
export class SquaresQuery extends Query<SquaresState> {
  quarter$ = this.select(s => s.quarter);
  constructor(protected store: SquaresStore) {
    super(store);
  }
}
