import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComparisonComponent } from './page-comparison.component';
import { HttpClientModule } from '@angular/common/http';
import { ComparisonItemService } from './services/comparison-item.service';
import { ComparisonItemComponent } from './components/comparison-item/comparison-item.component';



@NgModule({
  declarations: [PageComparisonComponent, ComparisonItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ComparisonItemService]
})
export class PageComparisonModule { }
