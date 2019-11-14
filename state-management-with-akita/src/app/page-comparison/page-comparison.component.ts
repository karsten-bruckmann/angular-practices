import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';

import { Observable } from 'rxjs';

import { ComparisonItemService } from './services/comparison-item.service';
import { ComparisonItemsQuery } from './queries/comparison-items.query';
import { ComparisonItemInterface } from './models/comparison-item.interface';

@Component({
  selector: 'app-page-comparison',
  templateUrl: './page-comparison.component.html',
  styleUrls: ['./page-comparison.component.less']
})
export class PageComparisonComponent implements OnInit {
  public comparisonItems$: Observable<ComparisonItemInterface[]>;
  public isLoading$: Observable<boolean>;


  constructor(
      private comparisonItemService: ComparisonItemService,
      private comparisonItemsQuery: ComparisonItemsQuery
  ) {}

  ngOnInit() {
    this.comparisonItemService.getItems().subscribe();

    this.comparisonItems$ = this.comparisonItemsQuery.selectAll();
    this.isLoading$ = this.comparisonItemsQuery.selectLoading();
  }

  removeItem(id: ID) {
    this.comparisonItemService.remove(id);
  }
}
