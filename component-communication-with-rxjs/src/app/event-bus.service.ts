import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class EmitEvent {
    constructor(public name: any, public value?: any) {}
}

export enum Events {
    ButtonClicked,
}

@Injectable()
export class EventBusService {
    private subject$ = new Subject();

    public emit(event: EmitEvent): void {
        this.subject$.next(event);
    }

    public on(event: Events, action: any): Subscription {
        return this.subject$.pipe(
            filter((e: EmitEvent) => {
                return e.name === event;
            }),
            map((e: EmitEvent) => {
                return e.value;
            })
        ).subscribe(action);
    }
}
