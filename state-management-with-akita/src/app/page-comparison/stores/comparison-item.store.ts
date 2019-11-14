import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ComparisonItemInterface } from '../models/comparison-item.interface';

export interface ComparisonItemsStateInterface extends EntityState<ComparisonItemInterface> {}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'comparisonItems'
})
export class ComparisonItemStore extends EntityStore<ComparisonItemsStateInterface> {
    constructor() {
        super();
    }
}
