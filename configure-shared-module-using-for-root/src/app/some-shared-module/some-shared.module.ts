import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { MyService, MyServiceOptions } from './my-service.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [SharedComponentComponent],
  imports: [
    CommonModule
  ],
  providers: [MyService],
  exports: [SharedComponentComponent]
})
export class SomeSharedModule { 
  static forRoot(options?: SharedModuleOptions): ModuleWithProviders {
      return {
        ngModule: SomeSharedModule,
        providers: [
          {
            provide: FOR_ROOT_OPTIONS_TOKEN,
            useValue: options
          },
          {
            provide: MyServiceOptions,
            useFactory: provideMyServiceOptions,
            deps: [FOR_ROOT_OPTIONS_TOKEN]
          }
        ]
      }
  }
}

export interface SharedModuleOptions {
  someValue: number;
}

export const FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<SharedModuleOptions>('forRoot() MyService configuration')

export function provideMyServiceOptions(options?: SharedModuleOptions): MyServiceOptions {
  let myServiceOptions = new MyServiceOptions();

  myServiceOptions.someValue = options.someValue;

  return myServiceOptions;
}
