import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeSharedModule } from './some-shared-module/some-shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomeSharedModule.forRoot({
      someValue: 5000
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
