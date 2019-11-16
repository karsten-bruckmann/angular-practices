import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AppRoutingModule } from './app-routing.module';
import { PageComparisonModule } from './page-comparison/page-comparison.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        environment.production
            ? [AkitaNgRouterStoreModule]
            : [AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule],
        AkitaNgRouterStoreModule.forRoot(),
        PageComparisonModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
