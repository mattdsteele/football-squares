import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SquaresQuery } from 'src/app/state/squares.query';
import { SquaresService } from 'src/app/state/squares.service';
import { Score } from '../scores.service';
import { Datasets } from '../datasets.service';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { SquareCellComponent } from '../square-cell/square-cell.component';

@Component({
    selector: 'app-superbowl-squares',
    templateUrl: './superbowl-squares.component.html',
    styleUrls: ['./superbowl-squares.component.css'],
    imports: [ReactiveFormsModule, SquareCellComponent]
})
export class SuperbowlSquaresComponent implements OnInit {
  data$: Observable<Score[]>;
  rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  allNumbers = new UntypedFormControl(false);
  dataset = new UntypedFormControl('');
  currentQuarter$: Observable<string>;
  datasets: { id: string; name: string }[];
  constructor(
    private query: SquaresQuery,
    private squares: SquaresService,
    private datasetService: Datasets
  ) {}

  ngOnInit() {
    this.currentQuarter$ = this.query.quarter$;
    this.datasets = this.datasetService.datasets;
    this.currentQuarter$.subscribe(q => this.dataset.setValue(q));
    this.query.showAllNumbers$.subscribe(allNums =>
      this.allNumbers.setValue(allNums)
    );
  }

  toggleNumbers(isChecked: boolean) {
    this.squares.toggleAlwaysVisible(isChecked);
  }
  updateDataset(value: string) {
    if (value) {
      this.squares.updateDataset(value);
    }
  }
}
