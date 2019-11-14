import { Component, OnInit } from '@angular/core';
import { ComparisonItemService } from './services/comparison-item.service';
import { ComparisonItemsQuery } from './queries/comparison-items.query';
import { Observable } from 'rxjs';
import { ComparisonItemInterface } from './stores/comparison-item.store';

@Component({
  selector: 'app-page-comparison',
  templateUrl: './page-comparison.component.html',
  styleUrls: ['./page-comparison.component.less']
})
export class PageComparisonComponent implements OnInit {
  public comparisonItems$: Observable<ComparisonItemInterface[]>;


  constructor(
      private comparisonItemService: ComparisonItemService,
      private comparisonItemsQuery: ComparisonItemsQuery
  ) {}

  ngOnInit() {
    this.comparisonItemService.getItems([1,2,3]).subscribe();
    this.comparisonItems$ = this.comparisonItemsQuery.selectAll();
  }
}
