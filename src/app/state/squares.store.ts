import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
export interface SquaresState {
  quarter: string;
}
export const createInitialState = (): SquaresState => {
  return {
    quarter: 'quarter1'
  };
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Squares' })
export class SquaresStore extends Store<SquaresState> {
  constructor() {
    super(createInitialState());
  }
}
