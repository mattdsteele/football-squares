import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Datasets {
  datasets: { id: string; name: string }[];
  constructor() {
    this.datasets = [
      { id: 'quarter1', name: 'Q1' },
      { id: 'quarter2', name: 'Q2' },
      { id: 'quarter3', name: 'Q3' },
      { id: 'scores', name: 'Q4 - All Games' },
      { id: 'superbowl', name: 'Q4 - Super Bowl Only' }
    ];
  }
}
