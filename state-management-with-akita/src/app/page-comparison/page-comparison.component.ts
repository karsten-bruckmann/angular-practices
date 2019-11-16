import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ID } from '@datorama/akita';

import { Observable } from 'rxjs';

import { ComparisonItemService } from './services/comparison-item.service';
import { ComparisonItemQuery } from './queries/comparison-item.query';
import { ComparisonItemInterface } from './models/comparison-item.interface';

@Component({
  selector: 'page-comparison',
  templateUrl: './page-comparison.component.html',
  styleUrls: ['./page-comparison.component.less']
})
export class PageComparisonComponent implements OnInit {
  public comparisonItems$: Observable<ComparisonItemInterface[]>;
  public isLoading$: Observable<boolean>;


  constructor(
      private comparisonItemService: ComparisonItemService,
      private comparisonItemsQuery: ComparisonItemQuery,
      private router: Router,
      private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    // Initial call
    this.comparisonItemService.getItems(
        this.activatedRoute.snapshot.queryParams['id']
    ).subscribe();

    this.comparisonItems$ = this.comparisonItemsQuery.selectComparisonItems$;
    this.isLoading$ = this.comparisonItemsQuery.selectLoading();
  }

  removeItem(id: ID) {
    const queryParams = this.activatedRoute.snapshot.queryParams['id'];

    if (queryParams.length <= 1) {
      return;
    }

    const newQueryParams = queryParams.filter(itemId => itemId !== id.toString(10));

    this.router.navigate([], { queryParams: {
        id: newQueryParams
      }});
  }
}
