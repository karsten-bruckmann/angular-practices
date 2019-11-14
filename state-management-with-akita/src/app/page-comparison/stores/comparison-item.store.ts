import { EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ComparisonItemInterface {
    id: ID;
    name: string;
    contribution: number;
    savings: number;
}

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
