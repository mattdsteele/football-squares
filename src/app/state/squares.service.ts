import { Injectable } from '@angular/core';
import { SquaresStore } from './squares.store';

@Injectable({
  providedIn: 'root'
})
export class SquaresService {
  constructor(private store: SquaresStore) {}
}
