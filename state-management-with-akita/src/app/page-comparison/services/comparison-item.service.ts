import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID, isArray } from '@datorama/akita';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ComparisonItemInterface } from '../models/comparison-item.interface';
import { ComparisonItemStore } from '../stores/comparison-item.store';

@Injectable({
    providedIn: 'root',
})
export class ComparisonItemService {
    constructor(
        private httpClient: HttpClient,
        private comparisonItemStore: ComparisonItemStore
    ) {}

    public getItems(ids: string[]): Observable<ComparisonItemInterface[]> {
        if (!isArray(ids)) {
            ids = [ids];
        }

        // TODO: Use routertreebuilder
        return this.httpClient
            .get<ComparisonItemInterface[]>(
                `http://localhost:3000/comparisonItems?id=${ids.join('&id=')}`
            )
            .pipe(
                tap((comparisonItems: ComparisonItemInterface[]) => {
                    this.comparisonItemStore.add(comparisonItems);
                })
            );
    }

    public remove(id: ID): void {
        this.comparisonItemStore.remove(id);
    }

    public setRecommendation(id: ID, value: string): void {
        this.comparisonItemStore.update(id, { recommendation: value });
    }
}
