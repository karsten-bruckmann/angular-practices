import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, AContainerComponent, AButtonComponent } from './app.component';
import { EventBusService } from './event-bus.service';

@NgModule({
  declarations: [
    AppComponent,
    AContainerComponent,
    AButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
