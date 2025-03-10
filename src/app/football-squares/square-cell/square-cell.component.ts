import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { SquaresQuery } from 'src/app/state/squares.query';
import { Score } from '../scores.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-square-cell',
    templateUrl: './square-cell.component.html',
    styleUrls: ['./square-cell.component.css'],
    changeDetection: ChangeDetectionStrategy.Default,
    imports: [NgClass]
})
export class SquareCellComponent implements OnInit {
  private squaresQuery = inject(SquaresQuery);

  priorityLevel: string;

  alwaysVisible: boolean;
  readonly home = input<number>(undefined);
  readonly away = input<number>(undefined);
  stats: { min: number; max: number };

  score: Score;
  private currentlyVisible = false;

  ngOnInit() {
    this.squaresQuery.showAllNumbers$.subscribe(
      alwaysVisible => (this.alwaysVisible = alwaysVisible)
    );
    this.squaresQuery.scores$
      .pipe(
        map(
          scores =>
            scores.filter(s => {
              return s.away === this.away() && s.home === this.home();
            })[0]
        )
      )
      .subscribe(score => (this.score = score));
    this.squaresQuery.stats$.pipe(filter(s => !!s)).subscribe(s => {
      this.stats = s;
      const index = Math.round(
        ((this.percentage - this.stats.min) / this.stats.max) * 5
      );
      this.priorityLevel = `priority-level-${index + 1}`;
    });
  }

  show() {
    this.currentlyVisible = true;
  }
  hide() {
    this.currentlyVisible = false;
  }

  visible() {
    return this.alwaysVisible || this.currentlyVisible;
  }

  get percentage() {
    if (this.score) {
      return Math.round(this.score.outcome * 10) / 10;
    }
  }

  visibleOrPercentage() {
    return this.visible() ? this.percentage : '';
  }
}
