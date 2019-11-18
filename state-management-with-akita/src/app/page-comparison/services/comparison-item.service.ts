import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ID, isArray } from '@datorama/akita';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ComparisonItemInterface } from '../models/comparison-item.interface';
import { ComparisonItemStore } from '../stores/comparison-item.store';

const apiBaseUrl = 'http://localhost:3000';

@Injectable({
    providedIn: 'root',
})
export class ComparisonItemService {
    constructor(
        private comparisonItemStore: ComparisonItemStore,
        private httpClient: HttpClient,
        private router: Router
    ) {}

    public getItems(ids: string[]): Observable<ComparisonItemInterface[]> {
        if (!isArray(ids)) {
            ids = [ids];
        }

        return this.httpClient
            .get<ComparisonItemInterface[]>(this.buildApiUrl(ids))
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

    private buildApiUrl(ids: string[]): string {
        const url = this.router
            .createUrlTree(['comparisonItems'], {
                queryParams: { id: ids },
            })
            .toString();

        return [apiBaseUrl, url].join('');
    }
}
