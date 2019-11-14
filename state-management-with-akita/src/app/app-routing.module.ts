import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComparisonComponent } from './page-comparison/page-comparison.component';


const routes: Routes = [{
  path: '',
  component: PageComparisonComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
