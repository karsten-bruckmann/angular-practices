import { Injectable } from '@angular/core';
import { isArray, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { switchMap } from 'rxjs/operators';

import { ComparisonItemsStateInterface, ComparisonItemStore } from '../stores/comparison-item.store';

@Injectable({
    providedIn: 'root'
})
export class ComparisonItemQuery extends QueryEntity<ComparisonItemsStateInterface> {
    constructor(
        protected comparisonItemStore: ComparisonItemStore,
        private routerQuery: RouterQuery
    ) {
        super(comparisonItemStore);
    }

    public selectComparisonItems$ = this.routerQuery.selectQueryParams('id').pipe(switchMap((ids: string[] | string) => {
        if (!isArray(ids)) {
            ids = [ids];
        }

        return this.selectMany(ids);
    }))
}
