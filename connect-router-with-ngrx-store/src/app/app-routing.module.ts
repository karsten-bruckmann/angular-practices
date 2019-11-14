import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareOpossumsComponent } from './compare-opossums/compare-opossums.component';

const routes: Routes = [{
  path: 'compare-opossums/:opossum1/:opossum2',
  component: CompareOpossumsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
