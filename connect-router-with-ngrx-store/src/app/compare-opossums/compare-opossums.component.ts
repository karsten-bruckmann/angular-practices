import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, select, Store } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

export interface State {
  data: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<State, fromRouter.RouterReducerState<any>>('data');

const {
  selectRouteData,
  selectRouteParam,
  selectRouteParams,
} = fromRouter.getSelectors(selectRouter);

@Component({
  selector: 'app-compare-opossums',
  templateUrl: './compare-opossums.component.html',
  styleUrls: ['./compare-opossums.component.less']
})
export class CompareOpossumsComponent implements OnInit {

  constructor(private store: Store<any>) {
    store.pipe(select('router')).subscribe((data) => console.log(data));
  }

  ngOnInit() {

  }

}
