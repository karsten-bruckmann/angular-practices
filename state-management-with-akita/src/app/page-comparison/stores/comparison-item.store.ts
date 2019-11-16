import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { ComparisonItemInterface } from '../models/comparison-item.interface';

export interface ComparisonItemsStateInterface
    extends EntityState<ComparisonItemInterface> {}

@Injectable({
    providedIn: 'root',
})
@StoreConfig({
    name: 'comparisonItem',
})
export class ComparisonItemStore extends EntityStore<
    ComparisonItemsStateInterface
> {
    constructor() {
        super();
    }
}
