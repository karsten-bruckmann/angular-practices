import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ID } from '@datorama/akita';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ComparisonItemStore } from '../stores/comparison-item.store';
import { ComparisonItemsQuery } from '../queries/comparison-items.query';
import { ComparisonItemInterface } from '../models/comparison-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ComparisonItemService {

  constructor(
      private httpClient: HttpClient,
      private comparisonItemStore: ComparisonItemStore,
      private comparisonItemsQuery: ComparisonItemsQuery
  ) {}

  public getItems() {
    const request$ = this.httpClient.get<ComparisonItemInterface[]>('http://localhost:3000/comparisonItems').pipe(
        tap(comparisonItems => {
          this.comparisonItemStore.add(comparisonItems);
        })
    );

    return this.comparisonItemsQuery.getHasCache() ? of() : request$;
  }

  public remove(id: ID) {
      this.comparisonItemStore.remove(id);
  }
}
