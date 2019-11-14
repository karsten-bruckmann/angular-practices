import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ComparisonItemInterface, ComparisonItemStore } from '../stores/comparison-item.store';
import { ComparisonItemsQuery } from '../queries/comparison-items.query';

@Injectable({
  providedIn: 'root'
})
export class ComparisonItemService {

  constructor(
      private httpClient: HttpClient,
      private comparisonItemStore: ComparisonItemStore,
      private comparisonItemsQuery: ComparisonItemsQuery
  ) {}

  public getItems(ids: number[]) {
    const request$ = this.httpClient.get<ComparisonItemInterface[]>('http://localhost:3000/comparisonItems').pipe(
        tap(comparisonItems => {
          this.comparisonItemStore.add(comparisonItems);
        })
    );

    return this.comparisonItemsQuery.getHasCache() ? of() : request$;
  }
}
