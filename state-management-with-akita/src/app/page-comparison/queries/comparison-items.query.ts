import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ComparisonItemsStateInterface, ComparisonItemStore } from '../stores/comparison-item.store';

@Injectable({
    providedIn: 'root'
})
export class ComparisonItemsQuery extends QueryEntity<ComparisonItemsStateInterface> {
    constructor(protected comparisonItemStore: ComparisonItemStore) {
        super(comparisonItemStore);
    }
}
