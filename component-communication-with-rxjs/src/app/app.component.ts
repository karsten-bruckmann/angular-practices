import { Component } from '@angular/core';
import { EmitEvent, EventBusService, Events } from './event-bus.service';

@Component({
  selector: 'app-root',
  template: `      
    <a-container>
      <a-container>
        <a-container>
          <a-container>
            <a-container>
                <a-button>A Button</a-button>
            </a-container>
          </a-container>
        </a-container>
      </a-container>
    </a-container>
    {{ buttonClicked ? 'A button clicked.' : null }}
  `,
})
export class AppComponent {
  public buttonClicked: boolean;

  constructor(private eventBusService: EventBusService) {
    eventBusService.on(Events.ButtonClicked, () => {
      this.buttonClicked = true;
    })
  }
}

@Component({
  selector: 'a-button',
  template: `
    <button (click)="onClick()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
      :host {
        margin: 10px;
      }
  `]
})
export class AButtonComponent {
  constructor(private eventBusService: EventBusService) {}

  public onClick(): void {
    this.eventBusService.emit(new EmitEvent(Events.ButtonClicked));
  }
}

@Component({
  selector: 'a-container',
  template: '<ng-content></ng-content>',
  styles: [`
      :host {
        padding: 50px 0 0 50px;
        margin: 20px;
        display: flex;
        justify-content: center;
        border: 1px solid #ccc;
      }
  `]
})
export class AContainerComponent {}
