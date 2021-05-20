import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.css'],
})
export class StarsComponent implements OnChanges {
  @Input()
  rating: number | undefined = 0;

  starDivWidth: number = 0;

  ngOnChanges(): void {
    if (this.rating) this.starDivWidth = (this.rating * 74) / 5;
  }
}
