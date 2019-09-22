import { Injectable, Inject } from '@angular/core';
import { FOR_ROOT_OPTIONS_TOKEN } from './some-shared.module'

@Injectable({
  providedIn: 'root'
})
export class MyServiceOptions {
  public someValue: number = 1000;
}

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private options: MyServiceOptions) { 
    console.log('options', options);
  }
}
