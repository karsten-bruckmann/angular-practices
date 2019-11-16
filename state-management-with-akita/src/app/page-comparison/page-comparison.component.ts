import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ID } from '@datorama/akita';

import { Observable } from 'rxjs';

import { take } from 'rxjs/operators';
import { ComparisonItemInterface } from './models/comparison-item.interface';
import { ComparisonItemQuery } from './queries/comparison-item.query';
import { ComparisonItemService } from './services/comparison-item.service';

@Component({
    selector: 'page-comparison',
    templateUrl: './page-comparison.component.html',
    styleUrls: ['./page-comparison.component.less'],
})
export class PageComparisonComponent implements OnInit {
    public comparisonItems$: Observable<ComparisonItemInterface[]>;
    public isLoading$: Observable<boolean>;

    constructor(
        private comparisonItemService: ComparisonItemService,
        private comparisonItemsQuery: ComparisonItemQuery,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.comparisonItemService
            .getItems(this.activatedRoute.snapshot.queryParams['id'])
            .pipe(take(1))
            .subscribe();

        this.comparisonItems$ = this.comparisonItemsQuery.selectComparisonItems$;
        this.isLoading$ = this.comparisonItemsQuery.selectLoading();
    }

    public removeItem(id: ID): void {
        const queryParams = this.activatedRoute.snapshot.queryParams['id'];

        if (queryParams.length <= 1) {
            return;
        }

        const newQueryParams = queryParams.filter(
            (itemId: ID) => itemId !== id.toString(10)
        );

        this.router.navigate([], {
            queryParams: {
                id: newQueryParams,
            },
        });
    }

    public onRecommendationChange(id: ID, event: Event): void {
        this.comparisonItemService.setRecommendation(id, event.target['value']);
    }
}
