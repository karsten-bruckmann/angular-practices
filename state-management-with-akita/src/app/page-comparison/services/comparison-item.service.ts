import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ID, isArray } from '@datorama/akita';
import { tap } from 'rxjs/operators';

import { ComparisonItemStore } from '../stores/comparison-item.store';
import { ComparisonItemInterface } from '../models/comparison-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ComparisonItemService {

  constructor(
      private httpClient: HttpClient,
      private comparisonItemStore: ComparisonItemStore,
  ) {}

  public getItems(ids: string[]) {
      if (!isArray(ids)) {
          ids = [ids];
      }

    // TODO: Use routertreebuilder
    return this.httpClient.get<ComparisonItemInterface[]>(`http://localhost:3000/comparisonItems?id=${ids.join('&id=')}`).pipe(
        tap(comparisonItems => {
          this.comparisonItemStore.add(comparisonItems);
        })
    );
  }

  public remove(id: ID) {
      this.comparisonItemStore.remove(id);
  }

  public setRecommendation(id: ID, value: string): void {
      this.comparisonItemStore.update(id, { recommendation: value });
  }
}
