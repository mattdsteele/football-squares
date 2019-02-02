import { Component, OnInit } from '@angular/core';
import { Datasets } from '../datasets.service';
import { Score, ScoresService } from '../scores.service';
import { SquaresQuery } from 'src/app/state/squares.query';
import { Observable } from 'rxjs';

const getMinAndMax = (data: Score[]) => {
  const sortedData = data.map(x => x.outcome).sort((a, b) => a - b);
  const [min, max] = [sortedData[0], sortedData[sortedData.length - 1]];
  const deltas = 6;
  const diff = (max - min) / deltas;
  return { min, max, diff, deltas };
};

@Component({
  selector: 'app-superbowl-squares',
  templateUrl: './superbowl-squares.component.html',
  styleUrls: ['./superbowl-squares.component.css']
})
export class SuperbowlSquaresComponent implements OnInit {
  stats: { min: any; max: any; diff: number; deltas: number };
  data: Score[];
  datasets: { id: string; name: string }[];
  rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  allNumbers = false;
  dataset = '';
  currentQuarter$: Observable<string>;
  constructor(
    datasetsService: Datasets,
    private scores: ScoresService,
    private query: SquaresQuery
  ) {
    this.datasets = datasetsService.datasets;
  }

  ngOnInit() {
    this.currentQuarter$ = this.query.quarter$;
  }

  updateDataset(value) {
    if (value) {
      this.data = this.scores.get(value);
      this.stats = getMinAndMax(this.data);
    }
  }
}
